import { useEffect, useState } from 'react';
import { FaCss3, FaGitAlt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';

const icons = [
  {
    name: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    name: 'CSS',
    icon: <FaCss3 />,
  },
  {
    name: 'JAVASCRIPT',
    icon: <FaJs />,
  },
  {
    name: 'TAILWINDCSS',
    icon: <RiTailwindCssFill />,
  },
  {
    name: 'REACT',
    icon: <FaReact />,
  },
  {
    name: 'GIT',
    icon: <FaGitAlt />,
  },
];

const Skills = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('skills-header');
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
    <div id="skills" className="py-5">
      <h2
        id="skills-header"
        className={`montserrat-bold md:text-2xl sticky top-0 left-0 right-0 z-10 transition-colors duration-300 px-5 py-3 mb-5 xl:hidden ${
          isSticky ? 'bg-cyan-400 text-white' : 'bg-transparent text-slate-800'
        }`}
      >
        SKILLS
      </h2>
      <div className="flex gap-3 flex-wrap md:text-xl px-5">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 shadow-sm border-2 border-transparent rounded-lg min-w-24 justify-center items-center p-2 hover:text-cyan-400 bg-cyan-50 montserrat-bold hover:border-2 hover:border-cyan-400"
          >
            <div>{item.icon}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
