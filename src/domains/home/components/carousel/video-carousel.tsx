import { useGSAP } from "@gsap/react";
import { hightlightsSlides } from "constant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { pauseImg, playImg, replayImg } from "constant/Images";
import { TProsessState, TVideoState } from "./type";
gsap.registerPlugin(ScrollTrigger);

export const VideoCarousel = () => {
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
  const { isEnd, startPlay, videoId, isLast, isPalying } = video;

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
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((slide, index) => (
          <div key={slide.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  ref={(el: HTMLVideoElement) => (videoRef.current[index] = el)}
                  id="video"
                  playsInline={true}
                  muted
                  preload="auto"
                  className={`${slide.id === 2 && "translate-x-44"} pointer-events-none`}
                  onPlay={() => {
                    setVideo((prev) => ({ ...prev, isPalying: true }));
                  }}
                  onEnded={() =>
                    index !== 3
                      ? handleProsess("video-end", index)
                      : handleProsess("video-last")
                  }
                  onLoadedMetadata={(event) =>
                    handleLoadedMetaData(index, event)
                  }
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {slide.textLists.map((list) => (
                  <p className="text-xl font-medium" key={list}>
                    {list}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef?.current?.map((_, index) => (
            <span
              key={index}
              ref={(el: HTMLSpanElement) => (videoDivRef.current[index] = el)}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el: HTMLSpanElement) =>
                  (videoSpanRef.current[index] = el)
                }
              />
            </span>
          ))}
        </div>
        <button className="control-btn">
          <img
            src={isLast ? replayImg : !isPalying ? playImg : pauseImg}
            alt={!isPalying ? "play" : "pause"}
            onClick={
              isLast
                ? () => handleProsess("video-reset")
                : !isPalying
                  ? () => handleProsess("play")
                  : () => handleProsess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};
