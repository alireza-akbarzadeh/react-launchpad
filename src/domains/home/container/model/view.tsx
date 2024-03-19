import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { TSizesList } from "constant";
import { Loading } from "containers/loading";
import { Lights } from "domains/home/components";
import { IphoneMesh } from "domains/home/components/iphone-mesh";
import { MutableRefObject, Suspense } from "react";
import * as THREE from "three";
import { TModelViewState } from "./model";

export type TModelViewProps = {
  index: any;
  groupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
  gsapType: "view1" | "view2";
  controlRef: MutableRefObject<any>;
  setRotaion: (value: number) => void;
  item: TModelViewState;
  size: TSizesList["value"];
};

export const ModelView = (props: TModelViewProps) => {
  const { controlRef, groupRef, index, gsapType, item, setRotaion, size } =
    props;
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotaion(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        {/* Check why i Suspense not working */}
        {/* <Suspense fallback={<Loading />}> */}
        <IphoneMesh
          group={{ scale: index === 1 ? [15, 15, 15] : [17, 17, 17] }}
          item={item}
          size={size}
        />
        {/* </Suspense> */}
      </group>
    </View>
  );
};
