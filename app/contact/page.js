import GradientBackground from "@/components/GradientBackground";
import Input from "@/components/input";
import MultiLineInput from "@/components/MultiLineInput";
import PageLayout from "@/template/PageLayout";
import React from "react";
import { CiChat1, CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FiSend } from "react-icons/fi";

const contact = () => {
  const contactDetails = [
    {
      id: 1,
      title: "Email",
      icon: <CiMail className="text-2xl" />,
      detail: "hello@hookik.com",
    },
    {
      id: 2,
      title: "Phone",
      icon: <CiPhone className="text-2xl" />,
      detail: "+1 (555) 123-4567",
    },
    {
      id: 1,
      title: "Office",
      icon: <CiLocationOn className="text-2xl" />,
      detail: "123 Creator Ave, Suite 500 San Francisco, CA 94103",
    },
    {
      id: 1,
      title: "Support Hours",
      icon: <CiChat1 className="text-2xl" />,
      detail: "Monday - Friday: 9AM - 6PM PST Saturday: 10AM - 2PM PST",
    },
  ];
  return (
    <>
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
                <div className="flex flex-col gap-y-6">
                  <div className="grid grid-cols-2 items-center gap-5">
                    <Input value={"First Name"} />
                    <Input value={"Last Name"} />
                  </div>
                  <Input
                    value={"Email Address"}
                    placeholder={"Your Email Address"}
                  />
                  <Input value={"Subject"} placeholder={"How can we help?"} />
                  <MultiLineInput
                    value={"Message"}
                    placeholder={"Please provide details about your inquiry..."}
                  />

                  <button className="w-full py-3 rounded-full flex gap-x-2 justify-center items-center text-white bg-[#8937CE] text-sm">
                    Send Message
                    <FiSend className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </GradientBackground>
      </PageLayout>
    </>
  );
};

export default contact;
