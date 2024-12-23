import Dice_1 from "./icons/dice-1";
import Dice_2 from "./icons/dice-2";
import Dice_3 from "./icons/dice-3";
import Dice_4 from "./icons/dice-4";
import Dice_5 from "./icons/dice-5";
import Dice_6 from "./icons/dice-6";

import Dice_1_Fill from "./icons/Dice-1-fill";
import Dice_2_Fill from "./icons/Dice-2-fill";
import Dice_3_Fill from "./icons/Dice-3-fill";
import Dice_4_Fill from "./icons/Dice-4-fill";
import Dice_5_Fill from "./icons/Dice-5-fill";
import Dice_6_Fill from "./icons/Dice-6-fill";

export type Variant = "outline" | "filled";

export function Dice1({
  width,
  height,
  variant,
}: {
  width: number;
  height: number;
  variant: Variant;
}) {
  if (variant === "filled") {
    return (
      <Dice_1_Fill
        width={width}
        height={height}
      />
    );
  } else {
    return (
      <Dice_1
        width={width}
        height={height}
      />
    );
  }
}

export function Dice2({
  width,
  height,
  variant,
}: {
  width: number;
  height: number;
  variant: Variant;
}) {
  if (variant === "filled") {
    return (
      <Dice_2_Fill
        width={width}
        height={height}
      />
    );
  } else {
    return (
      <Dice_2
        width={width}
        height={height}
      />
    );
  }
}

export function Dice3({
  width,
  height,
  variant,
}: {
  width: number;
  height: number;
  variant: Variant;
}) {
  if (variant === "filled") {
    return (
      <Dice_3_Fill
        width={width}
        height={height}
      />
    );
  } else {
    return (
      <Dice_3
        width={width}
        height={height}
      />
    );
  }
}

export function Dice4({
  width,
  height,
  variant,
}: {
  width: number;
  height: number;
  variant: Variant;
}) {
  if (variant === "filled") {
    return (
      <Dice_4_Fill
        width={width}
        height={height}
      />
    );
  } else {
    return (
      <Dice_4
        width={width}
        height={height}
      />
    );
  }
}

export function Dice5({
  width,
  height,
  variant,
}: {
  width: number;
  height: number;
  variant: Variant;
}) {
  if (variant === "filled") {
    return (
      <Dice_5_Fill
        width={width}
        height={height}
      />
    );
  } else {
    return (
      <Dice_5
        width={width}
        height={height}
      />
    );
  }
}

export function Dice6({
  width,
  height,
  variant,
}: {
  width: number;
  height: number;
  variant: Variant;
}) {
  if (variant === "filled") {
    return (
      <Dice_6_Fill
        width={width}
        height={height}
      />
    );
  } else {
    return (
      <Dice_6
        width={width}
        height={height}
      />
    );
  }
}
