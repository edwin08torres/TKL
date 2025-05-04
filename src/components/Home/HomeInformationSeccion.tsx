import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import { YoutubeLite } from "../layout/YoutubeLite"; // ajusta la ruta

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
    AOS.init({ duration: 1000, offset: 0 });
  }, []);

  return (
    <main className="overflow-x-hidden bg-black">
      <section className="mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="grid grid-cols-1 items-stretch gap-6 md:gap-0 lg:grid-cols-12">
          {/* imagen izquierda */}
          <div className="overflow-hidden rounded-2xl lg:col-span-4 lg:rounded-l-2xl lg:rounded-r-none">
            <img
              data-aos="fade-right"
              src="/assets/actions.png"
              alt="Keyboard — main view"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <article
            data-aos="fade-left"
            id="actions"
            className="
              group flex flex-col rounded-2xl bg-[#BEE1E6]
              transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
              hover:bg-slate-950 hover:shadow-2xl
              lg:col-span-8 lg:rounded-l-none lg:rounded-r-2xl
            "
          >
            <span className="m-6 w-fit self-start rounded-full bg-slate-500 px-4 py-1 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-[#010B40]">
              Actions
            </span>

            <header className="px-6">
              <h2 className="font-orbitron text-3xl font-extrabold text-black transition-colors duration-300 group-hover:text-white">
                Efficiency &amp;&nbsp;Elegancy
              </h2>

              <p className="mt-4 font-inter leading-relaxed text-gray-800 transition-colors duration-300 group-hover:text-white">
                The <strong>Logitech G915 TKL</strong> redefines the typing and
                gaming experience with its sleek, low‑profile design and
                cutting‑edge
                <strong> LIGHTSPEED</strong> wireless technology. Equipped with
                GL mechanical switches, it ensures smooth, precise, and quiet
                keystrokes—ideal for both work and competitive gaming
                environments. An aircraft‑grade aluminum top‑case, dedicated
                media controls, and per‑key
                <strong> LIGHTSYNC RGB</strong> backlighting add a premium touch
                of style to any setup, while a full‑charge battery life of up
                to&nbsp;40 hours keeps you productive all day long.
              </p>
            </header>

            <figure className="mt-6 grow overflow-hidden">
              <img
                src="/assets/actions-2.jpg"
                alt="Keyboard — detail view"
                className="
                  h-full w-full
                  rounded-b-2xl object-cover object-center
                  transition-transform duration-300
                  lg:rounded-bl-none lg:rounded-r-2xl
                "
                loading="lazy"
              />
            </figure>
          </article>
        </div>
      </section>

      <section
        id="Light"
        className="mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:px-8 overflow-x-hidden"
      >
        <div className="grid grid-cols-1 items-stretch gap-6 md:gap-0 lg:grid-cols-2">
          <article
            data-aos="fade-right"
            data-aos-delay="300"
            className="
              group flex flex-col justify-center rounded-2xl bg-[#BEE1E6] p-6
              transition-colors duration-300 hover:bg-slate-950
              lg:rounded-l-2xl lg:rounded-r-none
            "
          >
            <span className="mb-4 w-fit rounded-full bg-slate-500 px-4 py-1 text-sm text-white transition-colors duration-300 group-hover:bg-[#010B40]">
              Light
            </span>

            <h2 className="mb-4 text-3xl font-bold transition-colors duration-300 group-hover:text-white">
              Stellar Illumination
            </h2>

            <p className="text-base leading-relaxed transition-colors duration-300 group-hover:text-white">
              The keyboard doesn’t just perform; it shines. Multiple back‑light
              modes let you tailor the ambience to your workflow or mood—perfect
              for creators and gamers who demand both performance and
              aesthetics. Adjust brightness or trigger dynamic lighting effects
              right from the on‑board keys.
            </p>
          </article>

          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="aspect-video overflow-hidden rounded-2xl lg:rounded-l-none lg:rounded-r-2xl"
          >
            <YoutubeLite id="aKPNWJZVPgY" className="h-full w-full" />
          </div>
        </div>
      </section>

      <section
        id="Aesthetic"
        className="mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:px-8 overflow-x-hidden"
      >
        <div className="flex flex-col items-stretch gap-6 lg:flex-row">
          <div className="flex flex-col gap-6 lg:basis-[30%]">
            <article
              data-aos="fade-right"
              data-aos-delay="500"
              className="
                group flex flex-col rounded-2xl bg-[#BEE1E6] p-6
                transition-colors duration-300 hover:bg-slate-950
              "
            >
              <span className="mb-4 w-fit rounded-full bg-slate-500 px-4 py-1 text-sm text-white transition-colors duration-300 group-hover:bg-[#010B40]">
                Aesthetic
              </span>

              <h2 className="mb-4 text-3xl font-bold transition-colors duration-300 group-hover:text-white">
                Battery &amp;&nbsp;Design
              </h2>

              <p className="text-base leading-relaxed transition-colors duration-300 group-hover:text-white">
                Ultra‑slim yet incredibly strong, the aluminum‑alloy frame
                houses a battery capable of up to 40 hours on a single charge.
                Take it to the office, the studio, or your next LAN party
                without worrying about cables or power outlets.
              </p>
            </article>

            <div className="overflow-hidden rounded-2xl">
              <img
                data-aos="fade-right"
                data-aos-delay="600"
                src="/assets/time.jpg"
                alt="Latency / response‑time visual"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-2xl lg:basis-[70%]">
            <img
              data-aos="fade-left"
              data-aos-delay="700"
              src="/assets/size.jpg"
              alt="Keyboard size reference"
              className="h-full w-full object-cover object-center"
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
          {marqueeWords.map((word) => (
            <span
              key={word}
              className="
                mx-16 text-4xl sm:text-6xl lg:text-7xl
                font-extrabold uppercase tracking-widest
                bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400
                bg-clip-text text-transparent
                drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]
              "
            >
              {word}
            </span>
          ))}
        </Marquee>
      </div>
    </main>
  );
};
