import React from "react";

interface LogoProps {
  text: string;
}

const Logo: React.FC<LogoProps> = ({ text }) => {
  return (
    <h1 className="bg-gradient-to-r from-[#C33764] to-[#1D2671] text-transparent bg-clip-text text-3xl">
      {text}
    </h1>
  );
};

export default Logo;
