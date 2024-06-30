import FetchedCardWrapper from "@/components/FetcheCardWrapper";
import SearchCard from "@/components/SearchCard";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col gap-3 items-center justify-center min-h-[80vh]">
      <SearchCard />
      <FetchedCardWrapper />
    </div>
  );
};

export default page;
