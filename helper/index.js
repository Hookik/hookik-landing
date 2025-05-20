import { toast } from "sonner";

export const handleSuccess = (text) => {
  toast.success(text);
};

export const handleError = (text) => {
  toast.error(text);
};
