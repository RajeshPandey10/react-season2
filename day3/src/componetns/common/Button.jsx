const Button = ({ name, className }) => {
  return (
    <button
      className={`border hover:bg-green-700 px-10 py-2 cursor-pointer transition-all  rounded-lg ${className} `}
    >
      <a href="">{name}</a>
    </button>
  );
};

export default Button;
