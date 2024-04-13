/* eslint-disable react/no-unknown-property */

import { useGLTF, useTexture } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';

import { yellowImg } from 'constant/Images';
import { useEffect } from 'react';
import * as THREE from 'three';
import { TModelViewProps } from '../type';

interface IphoneMeshProps extends Pick<TModelViewProps, 'item' | 'size'> {
  group: GroupProps;
}

export function IphoneMesh(props: IphoneMeshProps) {
  const { group, item } = props;
  const { nodes, materials } = useGLTF('/models/scene.glb');
  // FIXME: finde the problem

  const texture = useTexture(yellowImg);

  useEffect(() => {
    Object.entries(materials).forEach(([key, material]) => {
      // Check if the material key is not in the list of materials that can't be changed
      if (
        ![
          'zFdeDaGNRwzccye',
          'ujsvqBWRMnqdwPx',
          'hUlRcbieVuIiOXG',
          'jlzuBkUzuJqgiAK',
          'xNrofRCqOXXHVZt',
        ].includes(key)
      ) {
        const updatedMaterial = material.clone() as THREE.Material; // Cast to THREE.Material
        if (updatedMaterial instanceof THREE.MeshBasicMaterial) {
          updatedMaterial.color = new THREE.Color(item.color[0]); // Update the color
          updatedMaterial.needsUpdate = true; // Mark material as needing update
        }
        materials[key] = updatedMaterial; // Replace the original material with the updated one
      }
    });
  }, [materials, item]);

  return (
    <group {...group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.ttmRoLdJipiIOmf as THREE.Mesh).geometry}
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.DjsDkGiopeiEJZK as THREE.Mesh).geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.buRWvyqhBBgcJFo as THREE.Mesh).geometry}
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.MrMmlCAsAxJpYqQ_0 as THREE.Mesh).geometry}
        material={materials.dxCVrUCvYhjVxqy}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.wqbHSzWaUxBCwxY_0 as THREE.Mesh).geometry}
        material={materials.MHFGNLrDQbTNima}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.QvGDcbDApaGssma as THREE.Mesh).geometry}
        material={materials.kUhjpatHUvkBwfM}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.vFwJFNASGvEHWhs as THREE.Mesh).geometry}
        material={materials.RJoymvEsaIItifI}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.evAxFwhaQUwXuua as THREE.Mesh).geometry}
        material={materials.KSIxMqttXxxmOYl}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.USxQiqZgxHbRvqB as THREE.Mesh).geometry}
        material={materials.mcPrzcBUcdqUybC}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.TvgBVmqNmSrFVfW as THREE.Mesh).geometry}
        material={materials.pIhYLPqiSQOZTjn}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.GuYJryuYunhpphO as THREE.Mesh).geometry}
        material={materials.eShKpuMNVJTRrgg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.pvdHknDTGDzVpwc as THREE.Mesh).geometry}
        material={materials.xdyiJLYTYRfJffH}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.CfghdUoyzvwzIum as THREE.Mesh).geometry}
        material={materials.jpGaQNgTtEGkTfo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.DjdhycfQYjKMDyn as THREE.Mesh).geometry}
        material={materials.ujsvqBWRMnqdwPx}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.usFLmqcyrnltBUr as THREE.Mesh).geometry}
        material={materials.sxNzrmuTqVeaXdg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.xXDHkMplTIDAXLN as THREE.Mesh).geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      />
      <meshStandardMaterial roughness={1} map={texture} />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.vELORlCJixqPHsZ as THREE.Mesh).geometry}
        material={materials.zFdeDaGNRwzccye}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.EbQGKrWAqhBHiMv as THREE.Mesh).geometry}
        material={materials.TBLSREBUyLMVtJa}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.EddVrWkqZTlvmci as THREE.Mesh).geometry}
        material={materials.xNrofRCqOXXHVZt}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.KSWlaxBcnPDpFCs as THREE.Mesh).geometry}
        material={materials.yQQySPTfbEJufve}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.TakBsdEjEytCAMK as THREE.Mesh).geometry}
        material={materials.PaletteMaterial003}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.IykfmVvLplTsTEW as THREE.Mesh).geometry}
        material={materials.PaletteMaterial004}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.wLfSXtbwRlBrwof as THREE.Mesh).geometry}
        material={materials.oZRkkORNzkufnGD}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.WJwwVjsahIXbJpU as THREE.Mesh).geometry}
        material={materials.yhcAXNGcJWCqtIS}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.YfrJNXgMvGOAfzz as THREE.Mesh).geometry}
        material={materials.bCgzXjHOanGdTFV}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.DCLCbjzqejuvsqH as THREE.Mesh).geometry}
        material={materials.vhaEJjZoqGtyLdo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.CdalkzDVnwgdEhS as THREE.Mesh).geometry}
        material={materials.jlzuBkUzuJqgiAK}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.NtjcIgolNGgYlCg as THREE.Mesh).geometry}
        material={materials.PpwUTnTFZJXxCoE}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.pXBNoLiaMwsDHRF as THREE.Mesh).geometry}
        material={materials.yiDkEwDSyEhavuP}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.IkoiNqATMVoZFKD as THREE.Mesh).geometry}
        material={materials.hiVunnLeAHkwGEo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.rqgRAGHOwnuBypi as THREE.Mesh).geometry}
        material={materials.HGhEhpqSBZRnjHC}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload('/models/scene.glb');
