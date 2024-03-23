import { Children, PropsWithChildren } from "react";

interface ISplitScreenProps {
  leftWeight?: number;
  rightWeight?: number;
}

export const SplitScreen = ({
  leftWeight = 1,
  rightWeight = 1,
  children,
}: PropsWithChildren<ISplitScreenProps>) => {
  const [left, middle, right] = Children.toArray(children);
  return (
    <div className="flex">
      <div style={{ flex: leftWeight }}>{left}</div>
      <div style={{ flex: rightWeight }}>{middle}</div>
      <div style={{ flex: rightWeight }}>{right}</div>
    </div>
  );
};
