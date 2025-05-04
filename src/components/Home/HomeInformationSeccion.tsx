import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const HomeInformationSeccion = () => {
  const marqueeWords = [
    "AGILE",
    "COMFORTABLE",
    "BEAUTIFUL",
    "RESPONSIVE",
    "PRECISE",
    "WIRELESS",
    "DURABLE",
    "SLEEK",
    "QUIET",
    "RGB‑READY",
    "ULTRATHIN",
    "POWERFUL",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="bg-black overflow-x-hidden">
      <section className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-6 md:gap-0">
          <div className="lg:col-span-4 overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
            <img
              data-aos="fade-right"
              data-aos-delay="100"
              src="/assets/actions.png"
              alt="Keyboard"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <article
            data-aos="fade-left"
            id="actions"
            className="lg:col-span-8 flex flex-col bg-[#BEE1E6] rounded-2xl lg:rounded-r-2xl lg:rounded-l-none transition-colors duration-500 ease-in-out hover:bg-slate-950 group"
          >
            <span className="self-start bg-slate-500 group-hover:bg-[#010B40] text-white text-sm font-semibold px-4 py-1 rounded-full m-6">
              Actions
            </span>

            <header className="px-6">
              <h2 className="text-3xl font-orbitron font-extrabold text-black group-hover:text-white ">
                Efficiency &amp; Elegancy
              </h2>
              <p className="mt-4 text-gray-800 group-hover:text-white leading-relaxed font-inter font-normal">
                The Logitech G915 TKL redefines the typing and gaming experience
                with its sleek, low‑profile design and cutting‑edge LIGHTSPEED
                wireless technology. Equipped with GL mechanical switches, it
                ensures smooth, precise, and quiet keystrokes—ideal for both
                work and competitive gaming environments. Its advanced aluminum
                build, dedicated media controls, and customizable RGB
                backlighting add a premium touch of style to any setup.
              </p>
            </header>

            <figure className="mt-6 grow">
              <img
                src="/assets/actions-2.jpg"
                alt="Keyboard detail"
                className="w-full h-full object-cover object-center rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl"
                loading="lazy"
              />
            </figure>
          </article>
        </div>
      </section>

      <section
        id="Light"
        className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-0 items-stretch">
          <article
            data-aos="fade-right"
            data-aos-delay="300"
            className="flex flex-col justify-center bg-[#BEE1E6] p-6 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none hover:bg-slate-950 transition-colors duration-500 group"
          >
            <span className="bg-slate-500 group-hover:bg-[#010B40] text-white text-sm px-4 py-1 rounded-full mb-4 w-fit">
              Light
            </span>
            <h2 className="text-3xl font-bold mb-4 group-hover:text-white">
              Stellar Illumination
            </h2>
            <p className="text-base leading-relaxed group-hover:text-white">
              The Logitech G915 TKL not only delivers an exceptional typing and
              auditory experience, but also elevates your setup with elegant
              lighting. With multiple back‑light modes you can adapt the
              ambience to your work or mood—ideal for those who value both
              performance and aesthetics.
            </p>
          </article>

          <div className="aspect-video overflow-hidden rounded-2xl lg:rounded-r-2xl lg:rounded-l-none">
            <iframe
              data-aos="fade-left"
              data-aos-delay="400"
              src="https://www.youtube.com/embed/aKPNWJZVPgY"
              title="YouTube video"
              className="w-full h-full"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        id="Aesthetic"
        className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-8"
      >
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="lg:basis-[30%] flex flex-col gap-6">
            <article
              data-aos="fade-right"
              data-aos-delay="500"
              className="bg-[#BEE1E6] p-6 rounded-2xl hover:bg-slate-950 transition-colors group flex flex-col"
            >
              <span className="bg-slate-500 group-hover:bg-[#010B40] text-white text-sm px-4 py-1 rounded-full mb-4 w-fit">
                aesthetic
              </span>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-white">
                Battery && Design
              </h2>
              <p className="text-base leading-relaxed group-hover:text-white">
                The Logitech G915 TKL keyboard not only delivers an exceptional
                typing and auditory experience, but also elevates your setup
                with elegant lighting. Thanks to its ultra‑slim aluminum‑alloy
                chassis and **up to 40 hours of battery life on a single
                charge**, it blends portability and endurance without
                sacrificing performance. With multiple back‑light modes, you can
                adapt the ambience to your work or mood while maintaining a
                refined, professional **aesthetic**.
              </p>
            </article>

            <div className=" overflow-hidden rounded-2xl">
              <img
                data-aos="fade-right"
                data-aos-delay="600"
                src="/assets/time.jpg"
                alt="Response time"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:basis-[70%] aspect-video overflow-hidden rounded-2xl">
            <img
              data-aos="fade-left"
              data-aos-delay="700"
              src="/assets/size.jpg"
              alt="Keyboard size reference"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="w-full overflow-hidden py-8">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover
          className="select-none overflow-hidden"
        >
          {marqueeWords.map((word, i) => (
            <span
              key={i}
              className="mx-16 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-widest uppercase
                       text-transparent bg-clip-text bg-gradient-to-r
                       from-cyan-400 via-teal-300 to-cyan-400
                       drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]"
            >
              {word}
            </span>
          ))}
        </Marquee>
      </div>
    </main>
  );
};
