import DiamondPlus from "./icons/diamond-plus";
import Diamond from "./icons/diamond";

import { Button } from "./ui/button";
import { Variant } from "@/App";

export default function VariantToggle({
  variant,
  setVariant,
}: {
  variant: Variant;
  setVariant: React.Dispatch<React.SetStateAction<Variant>>;
}) {
  return (
    <>
      {variant === "filled" ? (
        <Button
          variant="outline"
          size="icon"
          className="header-button"
          onClick={() => {
            setVariant("outline");
            localStorage.setItem("dice-variant", "outline");
          }}
        >
          <Diamond />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="header-button"
          onClick={() => {
            setVariant("filled");
            localStorage.setItem("dice-variant", "filled");
          }}
        >
          <DiamondPlus />
        </Button>
      )}
    </>
  );
}
