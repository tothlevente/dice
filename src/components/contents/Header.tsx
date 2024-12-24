import VariantToggle from "../variant-toggle";
import HeaderTitle from "../header-title";

import { ModeToggle } from "../mode-toggle";
import { Variant } from "@/App";

export default function Header({
  variant,
  setVariant,
  color,
  setColor,
}: {
  variant: Variant;
  setVariant: React.Dispatch<React.SetStateAction<Variant>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="header">
      <HeaderTitle />
      <div className="header-container">
        <VariantToggle
          variant={variant}
          setVariant={setVariant}
        />
        <ModeToggle />
      </div>
    </div>
  );
}
