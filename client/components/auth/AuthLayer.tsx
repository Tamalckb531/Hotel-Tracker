"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  const router = useRouter();

  if (!user) {
    router.push("/login");
  }

  return <>{children}</>;
};

export default AuthLayout;
