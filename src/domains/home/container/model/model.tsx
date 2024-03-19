import { useGSAP } from "@gsap/react";
import { yellowImg } from "constant/Images";
import gsap from "gsap";
import { MutableRefObject, useRef, useState } from "react";
import * as THREE from "three";
import { ModelView } from "./view";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes, TSizesList } from "constant";
import { Button } from "components";

export type TModelViewState = {
  title: string;
  color: string[];
  img: string;
};

export const Model = () => {
  const [size, setSetsize] = useState<TSizesList["value"]>("small");
  const [modelview, setModelview] = useState<TModelViewState>({
    title: "iphone 15 pro i n Natural titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });
  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();
  // model
  const small: MutableRefObject<THREE.Group> = useRef(new THREE.Group());
  const large: MutableRefObject<THREE.Group> = useRef(new THREE.Group());
  // rotation
  const [smallRotation, setSmallRotation] = useState<number>(0);
  const [largeRotation, setLargeRotation] = useState<number>(0);

  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer Look.
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotaion={setSmallRotation}
              item={modelview}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotaion={setLargeRotation}
              item={modelview}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root") as HTMLElement}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">
              {modelview.title}
            </p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((model, index) => (
                  <li
                    onClick={() => setModelview(model)}
                    key={index}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: model.color[0] }}
                  ></li>
                ))}
              </ul>
              <Button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSetsize(value)}
                  >
                    {label}
                  </span>
                ))}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
