import { Toaster as Sonner, toast } from "sonner";

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      className="toaster group"
      position="top-right"
      toastOptions={{
        classNames: {
          toast: "group toast",
          description: "text-muted",
          actionButton: "btn btn-primary btn-sm",
          cancelButton: "btn btn-secondary btn-sm",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };