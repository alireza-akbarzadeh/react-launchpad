import { type ClassValue, clsx } from "clsx";
import { MutableRefObject } from "react";
import { twMerge } from "tailwind-merge";
import * as THREE from "three";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const animateWithGsapTimeLine = (
  timeline: gsap.core.Timeline,
  rotaitionRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
  rotaitionState: number,
  firstTarget: "#view1" | "#view2",
  secondTarget: "#view1" | "#view2",
  animationProps: gsap.AnimationVars
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
