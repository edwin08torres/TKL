import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const HomeHeroSeccion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 0 });
  }, []);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <h1
        data-aos="fade-down"
        className="
          absolute z-10
          left-1/2 top-1/2 md:top-[20rem] -translate-x-1/2 -translate-y-1/2
          max-w-[90vw] text-start
          text-[4rem] sm:text-[5.5rem]
          font-extrabold leading-none text-white"
      >
        Agile.
        <br />
        Comfortable.
        <br />
        Beautiful.
      </h1>

      <img
        src="/assets/heroupd.webp"
        alt="Logitec G915 TKL"
        className="z-0 h-auto w-full object-contain"
        loading="eager"
        decoding="async"
      />
    </section>
  );
};
