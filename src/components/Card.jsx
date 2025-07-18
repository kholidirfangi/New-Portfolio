import Badge from "./Badge";

const data = [
  {
    image: "./assets/image/portfolio-salis.png",
    title: "Portfolio Salis | Designer Graphic",
    desc: "This is a landing page for a porfolio a graphic designer. This landing page show the project and active queue",
    link: "https://portfolio-salis.vercel.app/",
    tools: ["Vite", "React", "Tailwind CSS", "Firebase"],
  },
  {
    image: "./assets/image/amanahfc.png",
    title: "Fotocopy Amanah Jaya Landing Page",
    desc: "This is a landing page for a Photocopy bussines.This landing page help the bussines to show in internet and reach more potential customer",
    link: "https://amanah-fc.vercel.app/",
    tools: ["Vite", "React", "Tailwind CSS"],
  },
  {
    image: "./assets/image/cartshop.png",
    title: "Caffe Shop",
    desc: "A simple E-commerce, you can add the item to cart and show the total of your buy and then you can confirm the buy",
    link: "https://caffe-shop-one.vercel.app/",
    tools: ["Vite", "React", "Tailwind CSS"],
  },
  {
    image: "./assets/image/easybank.png",
    title: "Easybank Landing Page",
    desc: "A Landing Page for digital banking to easily the customer to access the information for the bank",
    link: "https://easybank-seven-virid.vercel.app/",
    tools: ["Vite", "React", "Tailwind CSS"],
  },
  {
    image: "./assets/image/notesapp.png",
    title: "Notes App",
    desc: "The Application to helps people note the important thing so that he not forget them",
    link: "https://notes-app-seven-theta.vercel.app/",
    tools: ["HTML", "CSS", "Javascript"],
  },
];

const Card = () => {
  return (
    <div
      className="flex flex-col gap-5 px-5
    "
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-5 md:gap-10 hover:bg-cyan-200/10 backdrop-blur-sm rounded-lg hover:shadow-md border-2 hover:border-cyan-300 p-3 border-transparent px-5 dark:bg-slate-800"
        >
          <div className="w-full md:w-1/3 mt-3">
            <img src={item.image} className="w-full rounded-md" />
          </div>
          <div className="w-full md:w-2/3">
            <a
              href={item.link}
              target="_blank"
              className="text-slate-900 hover:text-cyan-400 dark:hover:text-cyan-400 md:text-xl dark:text-slate-200 hover:underline"
            >
              {item.title}
            </a>
            <p className="montserrat-regular text-slate-500 md:text- text-justify dark:text-slate-400 mt-2">
              {item.desc}
            </p>
            <div className="flex gap-3 mt-5">
              {item.tools?.map((tool, index) => (
                <Badge tool={tool} key={index} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
