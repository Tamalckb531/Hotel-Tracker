import React from "react";

const WebFooter = () => {
  return (
    <div className=" h-[7vh] flex items-end justify-between m-5">
      <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Privacy
      </p>

      <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Contact
      </p>

      <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        About
      </p>
    </div>
  );
};

export default WebFooter;
