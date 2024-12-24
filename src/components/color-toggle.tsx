import { HexColorPicker } from "react-colorful";
import { Button } from "./ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import SwatchBook from "./icons/swatch-book";

export default function ColorToggle({
  color,
  setColor,
}: {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="outline"
        >
          <SwatchBook />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-50">
        <HexColorPicker
          color={color}
          onChange={(newColor) => {
            setColor(newColor),
              localStorage.setItem("dice-color", newColor);
          }}
          style={{ justifySelf: "center" }}
        />
      </PopoverContent>
    </Popover>
  );
}
