import { useGSAP } from '@gsap/react';
import { hightlightsSlides } from 'constant';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import {
  TProsessState,
  TReturnUseCarouselController,
  TVideoState,
} from '../type';

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
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState<
    {
      index: number;
      event: SyntheticEvent<HTMLVideoElement, Event>;
    }[]
  >([]);
  const { isEnd, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to('#slider', {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: 'power2.inOut',
    });
    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none',
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);
  const handleLoadedMetaData = (
    index: number,
    event: SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    setLoadedData((prev) => [...prev, { index, event }]);
  };

  useEffect(() => {
    if (loadedData.length > 3) {
      const videoElement = videoRef.current[videoId];
      if (videoElement) {
        if (!isPlaying) {
          videoElement.pause();
        } else if (startPlay) {
          videoElement.play();
        }
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData, videoRef]);

  useEffect(() => {
    let currentProgess = 0;
    const span = videoSpanRef.current;
    if (span[videoId]) {
      // animate progress a video
      const anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (Number(progress) !== Number(currentProgess)) {
            currentProgess = progress;

            let width;
            if (window.innerWidth < 760 || window.innerWidth < 1200) {
              width = '10vw';
            } else {
              width = '4vw';
            }

            gsap.to(videoDivRef.current[videoId], {
              width,
            });

            gsap.to(span[videoId], {
              width: `${currentProgess}%`,
              backgroundColor: 'white',
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: '12px',
            });
            gsap.to(span[videoId], {
              backgroundColor: '#afafaf',
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
      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay, isPlaying]);

  const handleProsess = (
    prosess: TProsessState,
    i?: number
  ): TVideoState | undefined => {
    switch (prosess) {
      case 'video-end':
        return { ...video, isEnd: true, videoId: Number(i) + 1 };
      case 'video-last':
        return { ...video, isLast: true, videoId: Number(i) + 1 };
      case 'video-reset':
        return { ...video, isLast: false, videoId: 0 };
      case 'play':
      case 'pause':
        return { ...video, isPlaying: !video.isPlaying };
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
