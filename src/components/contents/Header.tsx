import VariantToggle from "../variant-toggle";
import HeaderTitle from "../header-title";
import ColorToggle from "../color-toggle";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

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
      <>
        <ToggleGroup
          variant="outline"
          type="multiple"
        >
          <ToggleGroupItem
            value="ColorToggle"
            aria-label="Color toggle"
          >
            <ColorToggle
              color={color}
              setColor={setColor}
            />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="VariantToggle"
            aria-label="Variant toggle"
          >
            <VariantToggle
              variant={variant}
              setVariant={setVariant}
            />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="ModeToggle"
            aria-label="Mode toggle"
          >
            <ModeToggle />
          </ToggleGroupItem>
        </ToggleGroup>
      </>
    </div>
  );
}
