"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const WebButton = () => {
  const router = useRouter();
  return (
    <Button className="w-1/5" onClick={() => router.push("/hotelSearch")}>
      Book Now
    </Button>
  );
};

export default WebButton;
