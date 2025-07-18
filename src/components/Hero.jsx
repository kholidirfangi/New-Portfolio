import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [isClickedList, setIsClickedList] = useState();
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed] = useState(50);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = ["Frontend Engineer", "Web Developer", "React Developer"];
  const deletingSpeed = 50;
  const delayBetweenWords = 500;

  useEffect(() => {
    const currentRole = roles[loopNum % roles.length];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, roles, typingSpeed]);

  const links = [
    {
      name: "About Me",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
  ];

  const handleActiveLink = (index) => {
    setIsClickedList(index);
  };

  return (
    <main className="py-5 px-5 xl:px-0">
      <h1 className="text-4xl mt-5 text-slate-800 hover:text-cyan-400 md:text-5xl dark:text-slate-100 font-bold">
        Kholid Irfangi
      </h1>

      <h3 className="montserrat-bold text-xl text-slate-700 my-2 h-7 md:text-2xl dark:text-slate-200 font-bitcount">
        {displayText}
      </h3>
      <p className="text-slate-600 text-lg md:text-xl dark:text-slate-400">
        I build accessible, pixel-perfect digital experiences for the web.
      </p>
      <div className="flex gap-5 my-5 dark:text-slate-400">
        <a
          className="hover:text-cyan-400"
          href="https://github.com/kholidirfangi"
          target="_blank"
        >
          <FaGithub size={28} />
        </a>
        <a
          className="hover:text-cyan-400"
          href="https://www.instagram.com/kholid_irfangi/"
          target="_blank"
        >
          <FaInstagram size={28} />
        </a>
        <a
          className="hover:text-cyan-400"
          href="https://www.linkedin.com/in/kholid-irfangi-4394a71a6/"
          target="_blank"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          className="hover:text-cyan-400"
          href="https://web.facebook.com/kholidns"
          target="_blank"
        >
          <FaFacebook size={28} />
        </a>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        {links.map((list, index) => (
          <a
            href={list.href}
            key={index}
            className={`${
              isClickedList === index ? "text-cyan-400 font-bold" : ""
            } flex group items-center gap-2 w-56 md:text-lg dark:text-slate-100`}
            onClick={() => handleActiveLink(index)}
          >
            <div
              className={`${
                isClickedList === index ? "w-28 bg-cyan-400" : "w-2"
              } group-hover:w-28 group-hover:bg-cyan-400 h-1 bg-current rounded-full transition-all duration-300 ease-in-out cursor-pointer}`}
            ></div>
            <div className="group-hover:text-cyan-400 group-hover:font-bold">
              {list.name}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Hero;
