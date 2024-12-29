const About = () => {
  return (
    <div id="about" className="py-5">
      <h2
        id="about-header"
        className={`
          montserrat-bold 
          md:text-2xl 
          px-5 
          py-3 
          mb-5 
          xl:hidden
          dark:text-slate-200
        `}
      >
        ABOUT ME
      </h2>
      <div className="px-5 text-slate-600 dark:text-slate-400 text-justify">
        <p className="mt-3 montserrat-regular md:text-xl">
          {`I'm an aspiring frontend engineer with a passion for creating beautiful, intuitive web experiences. While I'm at the beginning of my professional journey, my dedication to web development stems from a deep fascination with the intersection of design and technology.`}
        </p>
        <p className="mt-3 montserrat-regular md:text-xl">
          {`Through self-directed learning and personal projects, I've built a strong foundation in HTML, CSS, and JavaScript. I love experimenting with modern frameworks and am particularly excited about crafting responsive designs that work seamlessly across all devices.`}
        </p>
        <p className="mt-3 montserrat-regular md:text-xl">
          {`I'm currently seeking opportunities to apply my skills in a collaborative environment where I can make meaningful contributions while growing as a professional developer.`}
        </p>
      </div>
    </div>
  );
};

export default About;
