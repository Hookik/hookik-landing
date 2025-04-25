import { FiShoppingBag } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";

export const userCategories = [
  {
    id: 1,
    name: "For Creators",
    icon: <LuUsers className="text-2xl text-white" />,
    description:
      "Find brand partnerships, monetize your influence, and grow your audience with authentic content.",
    route: "",
    image: "for_creator",
  },
  {
    id: 2,
    name: "For Brands",
    icon: <FaRegChartBar className="text-2xl text-white" />,
    description:
      "Connect with creators who authentically love your products and reach their engaged audiences.",
    route: "",
    image: "for_brands",
  },
  {
    id: 3,
    name: "For Shoppers",
    icon: <FiShoppingBag className="text-2xl text-white" />,
    description:
      "Discover and shop products recommended by creators you trust, all in one place.",
    route: "",
    image: "for_shoppers",
  },
];
