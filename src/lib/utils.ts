import gsap from "gsap";
import * as THREE from "three";
import { ScrollTrigger } from "gsap/all";
import { MutableRefObject } from "react";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { Brand } from "./type-helper";
import { RegexPatterns } from "constant/regex-patterns";

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
export { deepPick, countDown, capitalize };

type EmailAddress = Brand<string, "EmailAddress">;

export const isValidEmail = (email: string): email is EmailAddress => {
  return RegexPatterns.Email.test(email);
};

export function isValid(input: string, regex: RegExp): boolean {
  return regex.test(input);
}
export function assertValid<T>(input: T, regex: RegExp): asserts input is T {
  if (typeof input !== "string" && typeof input !== "number") {
    throw new Error("Input must be a string or number");
  }
  if (!regex.test(String(input))) {
    throw new Error("Input does not match the expected pattern");
  }
}
