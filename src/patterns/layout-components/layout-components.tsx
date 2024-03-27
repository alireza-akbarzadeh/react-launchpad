import { SplitScreen } from "./split-screen";

const LeftHandComponents = ({ message }: { message: string }) => (
  <h1 className="bg-green-300 text-black px-2">{message}!</h1>
);
const RightHandComponents = ({ message }: { message: string }) => (
  <p className="bg-indigo-300 px-2 text-black">{message}!</p>
);
const MiddleHandComponents = ({ message }: { message: string }) => (
  <p className="bg-red-300 px-2 text-black">{message}!</p>
);

export function LayoutComponents() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponents message="Left" />
      <MiddleHandComponents message="Middle" />
      <RightHandComponents message="Right" />
    </SplitScreen>
  );
}
