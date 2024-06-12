import { toast } from "sonner";

export const showError = (message) => toast.error(message);
export const showSuccess = (message) => toast.success(message);
