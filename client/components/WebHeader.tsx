import React from "react";
import { ToggleButton } from "./ToggleButton";
import Profile from "./Profile";
import Logo from "./Logo";

const WebHeader = () => {
  return (
    <header className=" w-full h-[7vh] flex justify-between items-center p-4">
      <section className="logo">
        <Logo text="TravelOwl" />
      </section>
      <section className="theme-badge flex justify-between gap-4">
        <ToggleButton />
        <Profile />
      </section>
    </header>
  );
};

export default WebHeader;
