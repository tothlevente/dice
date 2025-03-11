import VariantToggle from "../themes/VariantToggle";
import ColorToggle from "../themes/ColorToggle";
import HeaderTitle from "./HeaderTitle";

import { ModeToggle } from "../themes/ModeToggle";
import { Variant } from "@/App";

interface Props {
  variant: Variant;
  setVariant: React.Dispatch<React.SetStateAction<Variant>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({
  variant,
  setVariant,
  color,
  setColor,
}: Props) {
  return (
    <div className="header">
      <HeaderTitle />
      <div>
        <ColorToggle
          color={color}
          setColor={setColor}
        />
        <VariantToggle
          variant={variant}
          setVariant={setVariant}
        />
        <ModeToggle />
      </div>
    </div>
  );
}
