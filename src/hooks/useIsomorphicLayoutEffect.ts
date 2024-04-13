import { useEffect, useLayoutEffect } from 'react';

//   "In the browser, I'm an `useLayoutEffect`, but in SSR, I'm an `useEffect`.",

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;