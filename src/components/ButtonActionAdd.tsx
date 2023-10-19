import Link from "next/link";
import React from "react";
import { IoIosAdd } from "react-icons/io";

interface ButtonActionAddProps {
  path: string;
  pathTitle: string;
}
export default function ButtonActionAdd(props: ButtonActionAddProps) {
  const { path, pathTitle } = props;
  return (
    <div className="fixed bottom-3 right-6">
      <Link
        href={{
          pathname: path,
          query: { title: pathTitle },
        }}
        passHref>
        <div className="flex rounded-full bg-violet-800 w-14 h-14 items-center justify-center hover:bg-violet-900">
          <IoIosAdd fontSize="36" color="#fff" />
        </div>
      </Link>
    </div>
  );
}
