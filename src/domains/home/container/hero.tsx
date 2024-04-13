import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from 'constant/Images';
import gsap from 'gsap';
import { useWindowSize } from 'hooks';

export function Hero() {
  const { width } = useWindowSize();
  const videoState = width < 765 ? smallHeroVideo : heroVideo;

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 });
    gsap.to('#cta', { opacity: 1, delay: 1.5, y: -50 });
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
            playsInline
            key={videoState}
          >
            <source src={videoState} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
}
