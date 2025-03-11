import { HexColorPicker } from "react-colorful";
import { Button } from "../ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import SwatchBook from "../../assets/icons/swatch-book";

interface Props {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export default function ColorToggle({ color, setColor }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="header-button"
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
