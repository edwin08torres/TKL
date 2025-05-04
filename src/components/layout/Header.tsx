import { useState, MouseEvent } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href")!; // “!” porque sabemos que always habrá href

    setTimeout(() => {
      setMenuOpen(false);
      window.location.href = href;
    }, 200);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <header className="fixed top-0 left-2 flex h-16  lg:justify-center lg:items-center w-full z-[99]">
        {/* menu para desktop */}
        <nav 
        data-aos="fade-down"
        className="hidden nav-bg lg:flex py-1 rounded-4xl text-lg justify-evenly items-center bg-neutral shadow-md shadow-black  text-white  w-[32rem] mt-6 border-[1px]">
          <a href="#actions" className="nav-link">
            Actions
          </a>
          <a href="#Light" className="nav-link">
            Light
          </a>
          <h2 className="text-3xl font-extrabold flex justify-center items-center mb-2 cursor-pointer hover:rounded-full hover:bg-[#86b7f0] w-20 transition-all duration-500 ease-in-out">
            <a href="#">Logi</a>
          </h2>
          <a href="#Aesthetic" className="nav-link">
            Aesthetic
          </a>
          <a href="#" className="nav-link">
            relleno
          </a>
        </nav>

        {/* Hamburger button (mobile)
        <button
          className="block lg:hidden text-white focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button> */}

        {/* Menu Mobile */}
        <div
          className={`block lg:hidden fixed top-0 left-0 w-full h-[100vh] bg-slate-950
          transform transition-all duration-700 delay-200 ease-in-out ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
        >
          <nav className="flex flex-col justify-center items-center h-full w-full gap-4">
            <a href="#actions" className="text-white" onClick={handleNavClick}>
              Actions
            </a>
            <a href="#Light" className="text-white" onClick={handleNavClick}>
              Light
            </a>
            <a
              href="#Aesthetic"
              className="text-white"
              onClick={handleNavClick}
            >
              Aesthetic
            </a>
            <a href="#" className="text-white" onClick={handleNavClick}>
              Relleno
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};
