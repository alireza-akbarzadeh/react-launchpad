import { useGSAP } from "@gsap/react";
import { hightlightsSlides } from "constant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import {
  TProsessState,
  TReturnUseCarouselController,
  TVideoState,
} from "../type";
gsap.registerPlugin(ScrollTrigger);

export const useCarouselController = (): TReturnUseCarouselController => {
  const videoRef = useRef<HTMLVideoElement[]>([]);
  const videoSpanRef = useRef<HTMLSpanElement[]>([]);
  const videoDivRef = useRef<HTMLSpanElement[]>([]);
  const [video, setVideo] = useState<TVideoState>({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLast: false,
    isPalying: false,
  });
  const [loadedData, setLoadedData] = useState<
    {
      index: number;
      event: SyntheticEvent<HTMLVideoElement, Event>;
    }[]
  >([]);
  const { isEnd, startPlay, videoId, isPalying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPalying: true,
        }));
      },
    });
  }, [isEnd, videoId]);
  const handleLoadedMetaData = (
    index: number,
    event: SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    setLoadedData((prev) => {
      return [...prev, { index, event }];
    });
  };

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPalying) {
        videoRef.current[videoId]?.pause();
      } else {
        startPlay && videoRef.current[videoId]?.play();
      }
    }
  }, [startPlay, videoId, isPalying, loadedData]);

  useEffect(() => {
    let currentProgess = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      // animate progress a video
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress != currentProgess) {
            currentProgess = progress;
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                    ? "10vw"
                    : "4vw",
            });
            gsap.to(span[videoId], {
              width: `${currentProgess}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPalying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });
      if (videoId === 0) {
        anim.restart();
      }
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };
      if (isPalying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  const handleProsess = (prosess: TProsessState, i?: number) => {
    switch (prosess) {
      case "video-end":
        setVideo((prev) => ({ ...prev, isEnd: true, videoId: Number(i) + 1 }));
        break;
      case "video-last":
        setVideo((prev) => ({ ...prev, isLast: true, videoId: Number(i) + 1 }));
        break;
      case "video-reset":
        setVideo((prev) => ({ ...prev, isLast: false, videoId: 0 }));
        break;
      case "play":
        setVideo((prev) => ({ ...prev, isPalying: !prev.isPalying }));
        break;
      case "pause":
        setVideo((prev) => ({ ...prev, isPalying: !prev.isPalying }));
        break;
      default:
        return video;
    }
  };

  return {
    handleProsess,
    videoRef,
    videoSpanRef,
    videoDivRef,
    setVideo,
    video,
    handleLoadedMetaData,
  };
};
