import { useEffect, useState } from 'react';
import Card from '../components/Card';

const Project = () => {
  const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const header = document.getElementById('projects-header');
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
    <div id="projects" className="py-5">
      <h2
        id="projects-header"
        className={`montserrat-bold md:text-2xl sticky top-0 left-0 right-0 z-10 transition-colors duration-300 px-5 py-3 mb-5 xl:hidden ${
          isSticky ? 'bg-cyan-400 text-white' : 'bg-transparent text-slate-800'
        }`}
      >
        PROJECTS
      </h2>
      <Card />
    </div>
  );
};

export default Project;
