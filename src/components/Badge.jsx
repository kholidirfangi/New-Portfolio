/* eslint-disable react/prop-types */
const Badge = ({ tool }) => {
  return (
    <div className="bg-cyan-50 dark:bg-transparent px-2 py-1 rounded-lg flex justify-center items-center text-cyan-500 text-sm">
      {tool}
    </div>
  );
};

export default Badge;
