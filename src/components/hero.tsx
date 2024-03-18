import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "utils";
import { useWindowSize } from "hooks";

export const Hero = () => {
  const { width } = useWindowSize();
  const videoState = width < 765 ? smallHeroVideo : heroVideo;

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoState}
          >
            <source src={videoState} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
