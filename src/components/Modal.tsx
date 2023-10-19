import React from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-lg">
        <div className="h-10 rounded-t-lg flex items-center justify-between px-4 border-b-2 ">
          <h1 className="font-medium">{title}</h1>
          <button onClick={onClose}>
            <IoMdClose />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
