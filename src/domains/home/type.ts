import { MutableRefObject, SyntheticEvent } from "react";
import { TModelViewState } from "./container/model/model";
import { TSizesList } from "constant";
import * as THREE from "three";

type TVideoState = {
  isEnd: boolean;
  startPlay: boolean;
  videoId: number;
  isLast: boolean;
  isPalying: boolean;
};

type TProsessState =
  | "video-end"
  | "play"
  | "pause"
  | "video-last"
  | "video-reset";

type TReturnUseCarouselController = {
  handleProsess: (
    prosess: TProsessState,
    i?: number
  ) => TVideoState | undefined;
  videoRef: React.MutableRefObject<HTMLVideoElement[]>;
  videoSpanRef: React.MutableRefObject<HTMLSpanElement[]>;
  videoDivRef: React.MutableRefObject<HTMLSpanElement[]>;
  setVideo: React.Dispatch<React.SetStateAction<TVideoState>>;
  video: TVideoState;
  handleLoadedMetaData: (
    index: number,
    event: SyntheticEvent<HTMLVideoElement, Event>
  ) => void;
};

export type TModelViewProps = {
  index: any;
  groupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
  gsapType: "view1" | "view2";
  controlRef: MutableRefObject<any>;
  setRotaion: (value: number) => void;
  item: TModelViewState;
  size: TSizesList["value"];
};

export type { TProsessState, TVideoState, TReturnUseCarouselController };
