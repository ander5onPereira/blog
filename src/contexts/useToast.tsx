import React, { useState, createContext, ReactNode } from "react";
import Toast from "@/components/Toast";

interface ToastProviderProps {
  children: ReactNode;
}

interface ToastProps {
  type: "alert" | "error" | "success";
  message: string;
}
interface ToastContextType {
  showToast: ({ type, message }: ToastProps) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: ToastProviderProps) {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = ({ type, message }: ToastProps) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3000); // Feche o toast após 3 segundos (você pode ajustar o tempo conforme necessário)
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast type={toast.type} message={toast.message} />}
    </ToastContext.Provider>
  );
}

export const ToastConsumer = ToastContext.Consumer;
export default ToastContext;
