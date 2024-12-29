const data = [
  {
    image: './assets/image/amanahfc.png',
    title: 'Fotocopy Amanah Jaya Landing Page',
    desc: 'This is a landing page for a Photocopy bussines.This landing page help the bussines to show in internet and reach more potential customer',
    link: 'https://amanah-fc.site/',
  },
  {
    image: './assets/image/cartshop.png',
    title: 'Product List With Cart Main',
    desc: 'A simple E-commerce, you can add the item to cart and show the total of your buy and then you can confirm the buy',
    link: 'https://product-list-with-cart-main-dusky.vercel.app/',
  },
  {
    image: './assets/image/easybank.png',
    title: 'Easybank Landing Page',
    desc: 'A Landing Page for digital banking to easily the customer to access the information for the bank',
    link: 'https://easybank-seven-virid.vercel.app/',
  },
  {
    image: './assets/image/notesapp.png',
    title: 'Notes App',
    desc: 'The Application to helps people note the important thing so that he not forget them',
    link: 'https://notes-app-seven-theta.vercel.app/',
  },
];

const Card = () => {
  return (
    <div className="flex flex-col gap-5 px-5">
      {data.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          key={index}
          className="flex gap-5 md:gap-10 hover:bg-cyan-200/10 backdrop-blur-sm rounded-lg hover:shadow-md border-2 hover:border-cyan-300 p-3 border-transparent cursor-pointer "
        >
          <div className="w-1/3 mt-3">
            <img src={item.image} className="w-full" />
          </div>
          <div className="w-2/3">
            <h3 className="montserrat-bold text-slate-800 hover:text-cyan-400 mb-3 md:text-2xl dark:text-slate-200">
              {item.title}
            </h3>
            <p className="montserrat-regular text-slate-600 md:text-xl text-justify dark:text-slate-400">
              {item.desc}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Card;
