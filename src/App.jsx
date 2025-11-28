import { useEffect, useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleDarkMode = () => {
    setIsDark(!isDark);
    document.querySelector("html").classList.toggle("dark");
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Add a smooth animation using transformed coordinates
      const x = e.clientX;
      const y = e.clientY;

      setPosition({ x, y });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);
  return (
    <main
      className="relative selection:bg-cyan-400 bg-white md:px-10 xl:flex xl:gap-10 w-screen cursor-default xl:px-20 dark:bg-slate-900 dark:bg-none scroll-auto pb-40 xl:pb-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" xl:w-1/2 xl:fixed top-0 bottom-0">
        <Hero />
        <div
          className="absolute -right-3 md:-left-10 bottom-5 z-10 "
          onClick={handleDarkMode}
        >
          {isDark ? (
            <img src="./assets/image/lamp.png" className="w-40" />
          ) : (
            <img src="./assets/image/lamp.png" className="w-40 grayscale" />
          )}
        </div>
        <p className="absolute right-2 md:left-0 bottom-5 z-10 dark:text-white text-slate-800">
          copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
      <div className="xl:w-1/2"></div>
      <div className="xl:w-1/2">
        <About />
        <Skills />
        <Projects />
      </div>
      {/* // Custom cursor */}
      <div
        className="fixed w-2 h-2 rounded-full pointer-events-auto cursor-default z-50"
        style={{
          transform: `translate(${position.x - 1}px, ${position.y - 1}px)`,
        }}
      />
      {/* Animated gradient blob */}
      <div
        className="pointer-events-none fixed blur-3xl opacity-15 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-100 ease-out"
        style={{
          width: "700px",
          height: "700px",
          transform: `translate(${position.x - 385}px, ${position.y - 350}px)`,
        }}
      />
    </main>
  );
};

export default App;
