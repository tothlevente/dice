import DiamondPlus from "../../assets/icons/diamond-plus";
import Diamond from "../../assets/icons/diamond";

import { Button } from "../ui/button";
import { Variant } from "@/App";

interface Props {
  variant: Variant;
  setVariant: React.Dispatch<React.SetStateAction<Variant>>;
}

export default function VariantToggle({ variant, setVariant }: Props) {
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
