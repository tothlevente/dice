import { variant } from "@/components/render-dice";

export default interface DiceProps {
  side: number;
  rolling: boolean;
  color?: string;
  variant: variant;
}
