import { Html } from "@react-three/drei";

export const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 lef-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">Loading...</div>
      </div>
    </Html>
  );
};
