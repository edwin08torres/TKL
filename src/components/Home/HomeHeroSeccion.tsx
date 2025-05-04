import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const HomeHeroSeccion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="bg-black w-full h-screen flex justify-center items-center overflow-hidden">
        <div className="md:w-full md:h-screen flex justify-center ">
          <h1
            data-aos="fade-down"
            className="absolute z-1 md:top-20 md:left-1/3 text-[4.5rem] left-3 md:text-[7rem] w-[23rem] text-start text-white font-extrabold leading-none"
          >
            Agile. Comfortable. Beautiful.
          </h1>
          <img
            className="w-auto rotate-45 md:rotate-12 z-0"
            src="/assets/heroupd.webp"
            alt="logi tkl"
          />
        </div>
      </section>
    </>
  );
};
