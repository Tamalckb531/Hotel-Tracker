import React from "react";
import ImageGallery from "./ImageGallery";
import SummaryBookingCard from "./SummaryBookingCard";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const HotelDetails = () => {
  return (
    <div className=" flex flex-col gap-5 p-4">
      <div className="text-bookNow-Section flex justify-between items-center p-2">
        <div className="head-location-offer flex flex-col gap-2">
          <div className=" flex justify-between items-center gap-5">
            <h1 className="text-4xl">Welcome to Brize Hotel</h1>
            <Badge
              variant="outline"
              className="text-md max-w-24 p-1 justify-center items-center"
            >
              Bandorban
            </Badge>
          </div>
          <Badge className=" max-w-32 p-1 text-lg justify-center items-center bg-emerald-400 hover:bg-emerald-600">
            25% Off
          </Badge>
        </div>
        <Button className=" text-lg">Book Now</Button>
      </div>
      <div className="Image-Section">
        <ImageGallery />
      </div>
      <Separator className=" m-5" />
      <div className="Pitch-Desc-Card-section flex justify-between">
        <div className=" w-1/2">
          <h1 className="text-3xl text-center">Best offer with comforts </h1>
          <p className="text-[16px] py-4 px-10 font-semibold text-gray-500 leading-relaxed md:leading-loose mt-4 text-center">
            Experience luxury and comfort at Brize Hotel, your ideal retreat in
            the heart of the city. Indulge in elegantly designed rooms,
            world-class amenities, and exceptional service. Whether you're here
            for business or leisure, Brize Hotel offers a serene escape with its
            lush gardens, gourmet dining, and state-of-the-art facilities.
            Discover the perfect blend of sophistication and relaxation at Brize
            Hotel, where every stay is a memorable experience.
          </p>
        </div>
        <div className="">
          <SummaryBookingCard />
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
