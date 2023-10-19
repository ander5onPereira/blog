import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Custon404() {
  const router = useRouter();
  const handleHome = () => {
    router.replace("/");
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="w-1/3">
        <Image
          src="/404.svg"
          alt="warning"
          className="w-full h-full"
          width={100}
          height={100}
        />
        <button
          className="bg-violet-800 hover:bg-violet-900 w-56 my-10 rounded-md py-2 text-white"
          onClick={handleHome}>
          Página inicial
        </button>
      </div>
    </div>
  );
}
