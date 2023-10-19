interface ToastProps {
  type: "alert" | "error" | "success";
  message: string;
}

const getToastColor = (type: ToastProps["type"]) => {
  switch (type) {
    case "alert":
      return "rgba(234, 179, 8, 0.75)";
    case "error":
      return "rgba(244, 63, 94, 0.75)";
    case "success":
      return "rgba(34, 197, 94, 0.75)";
    default:
      return "";
  }
};
export default function Toast({ type, message }: ToastProps) {
  const toastColor = getToastColor(type);

  if (!toastColor) {
    return null;
  }

  return (
    <div className="absolute top-14 right-1">
      <div
        className="p-4 rounded-lg shadow-lg"
        style={{
          backgroundColor: toastColor,
        }}>
        {message}
      </div>
    </div>
  );
}
