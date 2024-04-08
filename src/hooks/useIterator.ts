import { useCallback, useMemo, useState } from "react";

type UseIterator<TIndex> = {
  initialIndex?: number;
  items: TIndex[];
};

type UseIteratorReturnType<TIndex> = [TIndex, () => void, () => void];

export const useIterator = <TIterator>(
  props: UseIterator<TIterator>,
): UseIteratorReturnType<TIterator> => {
  const { initialIndex = 0, items = [] } = props;
  const [i, setIndex] = useState<number>(initialIndex);

  const prev = useCallback(() => {
    if (i === 0) return setIndex(items.length - 1);
    setIndex(i - 1);
  }, [i]);
  const next = useCallback(() => {
    if (i === items.length - 1) return setIndex(0);
    setIndex(i + 1);
  }, [i]);

  const item = useMemo<TIterator>(() => items[i], [i]);

  return [item || items[0], prev, next];
};
