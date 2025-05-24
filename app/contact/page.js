"use client";

import GradientBackground from "@/components/GradientBackground";
import Input from "@/components/Input";
import MultiLineInput from "@/components/MultiLineInput";
import { handleSuccess, handleError } from "@/helper";
import { useContactUsMutation } from "@/services/contact.api";
import PageLayout from "@/template/PageLayout";
import React from "react";
import { useForm } from "react-hook-form";
import { CiChat1, CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      title: "Email",
      icon: <CiMail className="text-2xl" />,
      detail: "support@hookik.com",
    },
    {
      id: 2,
      title: "Phone",
      icon: <CiPhone className="text-2xl" />,
      detail: "+2347087154839",
    },
    {
      id: 3,
      title: "Office",
      icon: <CiLocationOn className="text-2xl" />,
      detail: "No 16 Oduduwa Way, GRA Ikeja, Lagos",
    },
    {
      id: 4,
      title: "Support Hours",
      icon: <CiChat1 className="text-2xl" />,
      detail: "Monday - Friday: 9AM - 5PM PST Saturday: 10AM - 2PM PST",
    },
  ];

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [contactUs, { isLoading }] = useContactUsMutation();

  const onSubmit = async (data) => {
    try {
      const formData = {
        full_name: `${data?.firstName} ${data?.lastName}`,
        email: data?.email,
        phone_number: data?.phoneNumber,
        contact_purpose: data?.subject,
        message: data?.message,
      };

      await contactUs(formData).unwrap();
      handleSuccess("Message Sent Successfully");
      reset();
    } catch (err) {
      console.error(err);
      handleError("Error Sending Message, Try again!");
    }
  };

  return (
    <PageLayout footBanner={false}>
      <GradientBackground>
        <div className="max-w-[1200px] mx-auto flex flex-col my-10 gap-y-10 px-4">
          <div className="flex flex-col items-center gap-y-5">
            <h1 className="font-bold text-center text-4xl">Contact</h1>
            <p className="text-center opacity-60">
              Have questions or need assistance? We're here to help!
            </p>
          </div>

          <div className="flex flex-col w-full lg:flex-row">

            <div className="w-full lg:w-[50%] py-10 rounded-l-xl bg-[#8937CE] px-4 text-white flex flex-col gap-y-10">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-2xl font-semibold">Get In Touch</h2>
                <p className="text-sm">
                  We'd love to hear from you. Please fill out the form or
                  contact us using the information below.
                </p>
              </div>
              <div className="flex flex-col gap-y-10">
                {contactDetails?.map((item) => (
                  <div key={item?.id} className="flex gap-x-3">
                    {item?.icon}
                    <div className="flex flex-col gap-y-2">
                      <p className="text-sm font-semibold">{item?.title}</p>
                      <p className="text-sm">{item?.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="w-full lg:w-[50%] py-10 rounded-r-xl shadow-xl px-4 bg-white flex flex-col gap-y-10">
              <h2 className="text-2xl font-semibold">Send A Message</h2>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-6"
              >
                <div className="grid grid-cols-2 items-center gap-5">
                  <Input
                    name="firstName"
                    label="First Name"
                    control={control}
                    rules={{ required: "First name is required" }}
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    control={control}
                    rules={{ required: "Last name is required" }}
                  />
                </div>

                <Input
                  name="phoneNumber"
                  label="Phone Number"
                  control={control}
                  rules={{ required: "Phone Number is required" }}
                />

                <Input
                  name="email"
                  label="Email Address"
                  placeholder="Your Email Address"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email address",
                    },
                  }}
                />

                <Input
                  name="subject"
                  label="Subject"
                  placeholder="How can we help?"
                  control={control}
                  rules={{ required: "Subject is required" }}
                />

                <MultiLineInput
                  name="message"
                  label="Message"
                  placeholder="Please provide details about your inquiry..."
                  control={control}
                  rules={{ required: "Message cannot be empty" }}
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 rounded-full flex gap-x-2 justify-center items-center text-white text-sm ${
                    isLoading ? "bg-[#B18DDC]" : "bg-[#8937CE]"
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <FiSend className="text-xl" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </GradientBackground>
    </PageLayout>
  );
};

export default Contact;
