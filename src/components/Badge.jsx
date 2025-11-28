/* eslint-disable react/prop-types */
const Badge = ({ tool }) => {
  return (
    <div className="bg-cyan-400 text-white dark:bg-white px-2 py-1 rounded-full flex justify-center items-center dark:text-cyan-400 text-sm">
      {tool}
    </div>
  );
};

export default Badge;
