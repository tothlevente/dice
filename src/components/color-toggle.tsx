import SwatchBook from "./icons/swatch-book";
import { Button } from "./ui/button";

export default function ColorToggle({
  color,
  setColor,
}: {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <Button
        size="icon"
        variant="outline"
      >
        <SwatchBook />
      </Button>
    </div>
  );
}
