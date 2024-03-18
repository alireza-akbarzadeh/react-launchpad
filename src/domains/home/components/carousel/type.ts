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

export type { TProsessState, TVideoState };
