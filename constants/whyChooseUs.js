import { HiUsers } from "react-icons/hi2";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { PiMoneyWavyFill } from "react-icons/pi";

export const whyChooseUs = [
  {
    id: 1,
    title: "Extensive Network",
    description:
      "Get access to a vast pool of Influencers to promote your business across any industry",
    icon: <HiUsers className="text-2xl text-[#00002F]" />,
  },
  {
    id: 2,
    title: "Secure Transactions",
    description:
      "Trust and safety are our priorities. Your transactions are protected.",
    icon: <RiSecurePaymentFill className="text-2xl text-[#00002F]" />,
  },
  {
    id: 3,
    title: "Targeted Search",
    description:
      "Find influencers based on demographics, interests, and engagement metrics.",
    icon: <BsFillSearchHeartFill className="text-2xl text-[#00002F]" />,
  },
  {
    id: 4,
    title: "Quality Assurance",
    description:
      "CVerified profiles and reviews ensure top-notch collaborations.",
    icon: <FaStar className="text-2xl text-[#00002F]" />,
  },
  {
    id: 5,
    title: "Budget-Friendly",
    description: "Affordable options for every business size.",
    icon: <PiMoneyWavyFill className="text-2xl text-[#00002F]" />,
  },
];
