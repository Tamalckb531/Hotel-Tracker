"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const FetchedCard = () => {
  return (
    <Card className="w-[80%] text-center">
      <CardHeader className="border p-2">
        <CardTitle>Hotel Name</CardTitle>
        <CardDescription>Destination</CardDescription>
      </CardHeader>
      <CardContent className=" flex justify-between items-center gap-3 p-3 h-60">
        <div className="">
          <Image
            alt="Product image"
            className="rounded-md object-cover h-56 w-72"
            height="500"
            src=" https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
            width="500"
          />
        </div>
        <div className=" w-2/3 h-full text-start flex flex-col justify-between ">
          <h1 className=" text-2xl">Heading</h1>
          <Badge className=" max-w-20 p-1 text-md justify-center items-center">
            tag
          </Badge>
          <p className="text-[16px] font-semibold text-gray-500 leading-relaxed md:leading-loose px-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eos
            quos praesentium. Modi distinctio labore illum magnam voluptates ab
          </p>
          <Badge className=" max-w-28 p-1 text-md justify-center items-center bg-emerald-400 hover:bg-emerald-600">
            Offer
          </Badge>
        </div>
        <div className=" w-1/3 h-full text-end flex flex-col justify-between items-end">
          <span className=" text-2xl">ratings : 4.4</span>
          <span className=" text-lg text-emerald-400">condition : good</span>
          <span className="text-xl font-semibold text-gray-500 leading-relaxed md:leading-loose px-2">
            price : $497
          </span>
          <Button className=" w-1/2 mb-1">See More</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FetchedCard;
