import AuthLayout from "@/components/auth/AuthLayer";
import FetchedCardWrapper from "@/components/FetcheCardWrapper";
import SearchCard from "@/components/SearchCard";
import React from "react";

const page = () => {
  return (
    <AuthLayout>
      <div className=" flex flex-col gap-3 items-center justify-center min-h-[80vh]">
        <SearchCard />
        <FetchedCardWrapper />
      </div>
    </AuthLayout>
  );
};

export default page;
