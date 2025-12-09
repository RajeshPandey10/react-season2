

const Button = ({text,color}) => {
  return (<div className={`${color} border px-6 py-2 rounded-lg hover:bg-amber-400 cursor-pointer transition-all`}>{text}</div>);
};

export default Button;
