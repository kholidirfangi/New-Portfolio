import { useEffect, useState } from 'react';

const About = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('about-header');
      const stickyStart = header.offsetTop; // Position where the sticky effect starts

      if (window.scrollY >= stickyStart) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about" className="py-5">
      <h2
        id="about-header"
        className={`montserrat-bold md:text-2xl sticky top-0 left-0 right-0 z-10 transition-colors duration-300 px-5 py-3 mb-5 xl:hidden ${
          isSticky
            ? 'bg-cyan-400 text-white'
            : 'bg-transparent text-slate-800'
        }`}
      >
        ABOUT ME
      </h2>
      <div className='px-5'>
        <p className="mt-3 text-slate-600 montserrat-regular md:text-xl">
          {`I'm an aspiring frontend engineer with a passion for creating beautiful, intuitive web experiences. While I'm at the beginning of my professional journey, my dedication to web development stems from a deep fascination with the intersection of design and technology.`}
        </p>
        <p className="mt-3 text-slate-600 montserrat-regular md:text-xl">
          {`Through self-directed learning and personal projects, I've built a strong foundation in HTML, CSS, and JavaScript. I love experimenting with modern frameworks and am particularly excited about crafting responsive designs that work seamlessly across all devices.`}
        </p>
        <p className="mt-3 text-slate-600 montserrat-regular md:text-xl">
          {`I'm currently seeking opportunities to apply my skills in a
          collaborative environment where I can make meaningful contributions
          while growing as a professional developer.`}
        </p>
      </div>
    </div>
  );
};

export default About;
