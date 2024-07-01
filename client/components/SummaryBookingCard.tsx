"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function SummaryBookingCard() {
  const router = useRouter();
  return (
    <Card className=" w-[30vw] h-[35vh]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-3xl text-center w-full font-medium">
          Brize Hotel
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-muted-foreground">
          Book First to get the best deal. We accept cash/credit-card. Also have
          our own delivery system to maintain you heavy luggage.
        </p>
        <Badge className="text-[16px] font-semibold bg-emerald-400 leading-relaxed md:leading-loose mt-4 text-center">
          price : $50 / day
        </Badge>
      </CardContent>
      <CardFooter className=" flex justify-center items-center">
        <Button className="text-lg" onClick={() => router.push("/userDetails")}>
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
