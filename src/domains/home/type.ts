import { SyntheticEvent } from 'react';

type TVideoState = {
  isEnd: boolean;
  startPlay: boolean;
  videoId: number;
  isLast: boolean;
  isPlaying: boolean;
};

type TProsessState =
  | 'video-end'
  | 'play'
  | 'pause'
  | 'video-last'
  | 'video-reset';

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

export type { TProsessState, TReturnUseCarouselController, TVideoState };
