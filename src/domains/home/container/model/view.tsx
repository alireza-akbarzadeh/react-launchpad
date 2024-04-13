import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import { Lights, Loader } from 'domains/home/components';
import { IphoneMesh } from 'domains/home/components/iphone-mesh';
import { TModelViewProps } from 'domains/home/type';
import { Suspense } from 'react';
import * as THREE from 'three';

export function ModelView(props: TModelViewProps) {
  const { controlRef, groupRef, index, gsapType, item, setRotaion, size } =
    props;
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
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
        name={`${index === 1} ? 'small' : 'large`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IphoneMesh
            group={{ scale: index === 1 ? [15, 15, 15] : [17, 17, 17] }}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
}
