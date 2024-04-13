import { hightlightsSlides } from 'constant';
import { pauseImg, playImg, replayImg } from 'constant/Images';

import { useCarouselController } from '../hooks/useCarouselController';

export function VideoCarousel() {
  const {
    handleLoadedMetaData,
    handleProsess,
    setVideo,
    video: { isLast, isPlaying: isPalying },
    videoRef,
    videoSpanRef,
    videoDivRef,
  } = useCarouselController();

  let buttonImgSrc;
  if (isLast) {
    buttonImgSrc = replayImg;
  } else {
    buttonImgSrc = !isPalying ? playImg : pauseImg;
  }
  const buttonImgAlt = !isPalying ? 'play' : 'pause';
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((slide, index) => (
          <div key={slide.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  ref={(el: HTMLVideoElement) => {
                    videoRef.current[index] = el;
                  }}
                  id="video"
                  playsInline
                  muted
                  preload="auto"
                  className={`${slide.id === 2 && 'translate-x-44'} pointer-events-none`}
                  onPlay={() => {
                    setVideo((prev) => ({ ...prev, isPlaying: true }));
                  }}
                  onEnded={() =>
                    index !== 3
                      ? handleProsess('video-end', index)
                      : handleProsess('video-last')
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
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              ref={(el: HTMLSpanElement) => {
                videoDivRef.current[index] = el;
              }}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el: HTMLSpanElement) => {
                  videoSpanRef.current[index] = el;
                }}
              />
            </span>
          ))}
        </div>
        <button
          type="button"
          className="control-btn"
          onClick={() => {
            if (isLast) {
              handleProsess('video-reset');
            } else if (!isPalying) {
              handleProsess('play');
            } else {
              handleProsess('pause');
            }
          }}
        >
          <img src={buttonImgSrc} alt={buttonImgAlt} />
        </button>
      </div>
    </>
  );
}
