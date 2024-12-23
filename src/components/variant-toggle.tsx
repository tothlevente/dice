import DiamondPlus from "./icons/diamond-plus";
import Diamond from "./icons/diamond";

import { Variant } from "./render-dice";
import { Button } from "./ui/button";

export default function VariantToggle({
  variant,
  setVariant,
}: {
  variant: Variant;
  setVariant: React.Dispatch<React.SetStateAction<Variant>>;
}) {
  return (
    <div className="variant-container">
      {variant === "filled" ? (
        <Button
          variant="outline"
          size="icon"
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
          onClick={() => {
            setVariant("filled");
            localStorage.setItem("dice-variant", "filled");
          }}
        >
          <DiamondPlus />
        </Button>
      )}
    </div>
  );
}
