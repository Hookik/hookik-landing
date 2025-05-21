import { toast } from "sonner";

export const handleSuccess = (text) => {
  toast.success(text);
};

export const handleError = (text) => {
  toast.error(text);
};


export function convertDate(dateString) {
  const date = new Date(dateString);

  if (isNaN(date)) throw new Error("Invalid ISO date format");

  const day = date.getUTCDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getUTCFullYear();

  // Add ordinal suffix (st, nd, rd, th)
  const getOrdinal = (n) => {
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getOrdinal(day)} ${month}, ${year}`;
}
