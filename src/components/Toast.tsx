interface toastProps {
  type: string;
  message: string;
}
export default function Toast({ type, message }: toastProps) {
  let toastColor = "";

  switch (type) {
    case "alert":
      toastColor = "rgba(234,179, 8,0.75)";
      break;
    case "error":
      toastColor = "rgba(244,63,94,0.75)";
      break;
    case "success":
      toastColor = "rgba(34,197,94,0.75)";
      break;
    default:
      break;
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
