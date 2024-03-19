import gsap from "gsap";
import * as THREE from "three";
import { ScrollTrigger } from "gsap/all";
import { MutableRefObject } from "react";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

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
