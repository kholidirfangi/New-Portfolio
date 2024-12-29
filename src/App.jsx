import { useEffect, useState } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Project from './components/Project';
import Skills from './components/Skills';
import { FcIdea, FcNoIdea } from 'react-icons/fc';

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleDarkMode = () => {
    setIsDark(!isDark);
     document.querySelector('html').classList.toggle('dark');
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Add a smooth animation using transformed coordinates
      const x = e.clientX;
      const y = e.clientY;

      setPosition({ x, y });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);
  return (
    <main
      className="selection:bg-cyan-400 md:px-10 xl:flex xl:gap-10 relative w-screen cursor-default xl:px-20 dark:bg-slate-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" xl:w-1/2 xl:fixed top-0 bottom-0">
        <Hero />
      </div>
      <div className="xl:w-1/2"></div>
      <div className="xl:w-1/2">
        <About />
        <Skills />
        <Project />
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
          width: '700px',
          height: '700px',
          transform: `translate(${position.x - 385}px, ${position.y - 350}px)`,
        }}
      />
      <div className="absolute top-2 right-5" onClick={handleDarkMode}>
        {isDark ? (
          <FcIdea size={24} />
        ) : (
          <FcNoIdea size={24} />
        )}
      </div>
    </main>
  );
};

export default App;
