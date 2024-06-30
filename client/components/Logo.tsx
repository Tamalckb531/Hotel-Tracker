"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface LogoProps {
  text: string;
}

const Logo: React.FC<LogoProps> = ({ text }) => {
  const router = useRouter();
  return (
    <h1
      className="bg-gradient-to-r from-[#C33764] to-[#1D2671] text-transparent bg-clip-text text-3xl cursor-pointer"
      onClick={() => router.push("/")}
    >
      {text}
    </h1>
  );
};

export default Logo;
