import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Loading = () => {
  useGSAP(() => {
    gsap.from("#upper .loading_Circle", {
      y: -40,
      duration: 0.5,
      stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true,
      },
      ease: "power1.in",
    });
  });
  useGSAP(() => {
    gsap.from("#downer .loading_Circle", {
      y: 60,
      duration: 0.5,
      stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true,
      },
      ease: "power1.in",
      opacity: 0,
    });
  });

  useGSAP(() => {
    gsap.to("#bounce", {
      yPercent: -100,
      stagger: {
        each: 0.3,
      },
      ease: "power4.out",
      duration: 0.5,
      paused: true,
    });
  }, []);

  return (
    <>
      <div id="bounce" className="loading_container">
        <div id="upper" className="flex">
          <div className="loading_Circle"></div>
          <div className="loading_Circle"></div>
          <div className="loading_Circle"></div>
        </div>
        <div id="downer" className="flex">
          <div className="loading_Circle"></div>
          <div className="loading_Circle"></div>
          <div className="loading_Circle"></div>
        </div>
      </div>
      <div id="bounce" className="loading_container cyan"></div>
      <div id="bounce" className="loading_container darkblue"></div>
      <div id="bounce" className="loading_container cyan"></div>
    </>
  );
};
