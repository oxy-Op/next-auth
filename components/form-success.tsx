import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) {
    return null;
  }
  return (
    <div className="flex items-center gap-x-2 bg-emerald-500/15 p-3 text-emerald-500 text-sm">
      <CheckCircledIcon />
      <p>{message}</p>
    </div>
  );
};
