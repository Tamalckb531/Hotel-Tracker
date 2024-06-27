import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";

interface CardProps {
  title: string;
  description: string;
  imgLink: string;
  location: string;
}

const HotelCard: React.FC<CardProps> = ({
  title,
  description,
  imgLink,
  location,
}) => {
  return (
    <Card className="overflow-hidden h-[52vh]">
      <CardHeader>
        <CardTitle className=" text-center text-2xl">{title}</CardTitle>
        <CardDescription className=" text-center">
          <Badge variant="secondary" className=" px-4 py-2 text-sm m-1">
            {location}
          </Badge>
          <div className="text-[18px] font-semibold text-gray-500 leading-relaxed md:leading-loose text-center">
            {description}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt="Product image"
            className="w-full rounded-md object-cover"
            height="200"
            src={imgLink}
            width="300"
          />
        </div>
      </CardContent>
      <CardFooter className=" w-full flex justify-center items-center">
        <Button className="w-1/2">See More</Button>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
