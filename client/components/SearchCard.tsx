import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalenderInput } from "./CalenderInput";
import { HotelCategorySelector } from "./HotelCategorySelector";
import { Button } from "./ui/button";

export default function SearchCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Your Hotel</CardTitle>
      </CardHeader>
      <CardContent className=" flex gap-6">
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Where ?</Label>
            <Input placeholder="Enter your Destination" />
            <HotelCategorySelector />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">Who ?</Label>
            <Input placeholder="How many room for adult ?" />
            <Input placeholder="How many room for child ?" />
          </div>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="description">Budget ?</Label>
            <Input placeholder="Enter minimum" />
            <Input placeholder="Enter maximum" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="name">When ?</Label>
            <CalenderInput placeHolder="Starting Date" />
            <CalenderInput placeHolder="Ending Date" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Search Now</Button>
      </CardFooter>
    </Card>
  );
}
