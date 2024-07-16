"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { User } from "@/schema/UserSchema";

const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
