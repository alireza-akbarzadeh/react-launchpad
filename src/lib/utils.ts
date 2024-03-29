import { type ClassValue, clsx } from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { MutableRefObject } from "react";
import { twMerge } from "tailwind-merge";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const animateWithGsapTimeLine = (
  timeline: gsap.core.Timeline,
  rotaitionRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
  rotaitionState: number,
  firstTarget: "#view1" | "#view2",
  secondTarget: "#view1" | "#view2",
  animationProps: gsap.TweenVars
) => {
  timeline.to(rotaitionRef.current.rotation, {
    y: rotaitionState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};

interface IAnimateWithGsap {
  target: string;
  animationProps: gsap.TweenVars;
  scrollProps?: gsap.TweenVars["scrollTrigger"];
}

export const animateWithGsap = ({
  target,
  animationProps,
  scrollProps,
}: IAnimateWithGsap) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...(scrollProps || {}),
    },
  });
};

interface ICountDown {
  value: number;
  fn: (val: number) => void;
  delay?: number;
}

// cooldown recursive functionality
// recorsion stops when value reaches 0
const countDown = ({ value, fn, delay = 1000 }: ICountDown) => {
  fn(value);
  return value > 0
    ? setTimeout(() => {
        countDown({ value: value - 1, fn, delay });
      }, delay)
    : value;
};

const deepPick = <T, K extends keyof T>(fields: string, object: T): T[K] => {
  const [first, ...remaining] = fields.split(".");
  const value = object[first as keyof T];
  if (typeof value === "undefined") {
    throw new Error(`Property '${first}' not found in object`);
  }
  if (remaining.length === 0) {
    return value as T[K];
  }
  if (typeof value !== "object" || value === null) {
    throw new Error(`Invalid property '${first}'`);
  }
  return deepPick(remaining.join("."), value as any) as T[K];
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
export { capitalize, countDown, deepPick };
