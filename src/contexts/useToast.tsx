import Toast from "@/components/Toast";
import React, { useState, createContext, useContext, ReactNode } from "react";

interface ToastProviderProps {
  children: ReactNode;
}
interface ToastContextType {
  showToast: (type: string, message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: ToastProviderProps) {
  const [toast, setToast] = useState<{ type: string; message: string } | null>(
    null
  );

  const showToast = (type: string, message: string) => {
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




