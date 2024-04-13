import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

export  interface ChildProps<T> {
  goToNext: (stepData: T) => void;
}

interface IStepProps<T> {
  children: ReactNode;
  onNext: (septData: T) => void;
  currentIndex: number;
}

export const Steps = <T>(props: IStepProps<T>) => {
  const { children, currentIndex = 0, onNext } = props;

  const goToNext = (stepData: T) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < Children.count(children)) {
      onNext(stepData);
    }
  };

  const element = Children.toArray(children)[currentIndex];
  if (isValidElement(element)) {
    return cloneElement(element as ReactElement<ChildProps<T>>, { goToNext });
  }

  return element;
};

