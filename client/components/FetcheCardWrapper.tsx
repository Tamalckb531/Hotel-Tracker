import React from "react";
import FetchedCard from "./FetchedCard";

const FetchedCardWrapper = () => {
  return (
    <div className=" border w-[80%] flex flex-col justify-center items-center p-5 gap-5 rounded-lg">
      <FetchedCard />
      <FetchedCard />
      <FetchedCard />
    </div>
  );
};

export default FetchedCardWrapper;
