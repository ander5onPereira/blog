import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function Custon404() {

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="w-1/3">
        <Image src="/404.svg" alt="warning" className="w-full h-full" width={100} height={100} />
      </div>
    </div>
  );
}
