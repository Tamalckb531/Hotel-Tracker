import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function HotelCategorySelector() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select Hotel Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="est">Residential Hotel</SelectItem>
          <SelectItem value="cst">Cottage </SelectItem>
          <SelectItem value="mst">Resort</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
