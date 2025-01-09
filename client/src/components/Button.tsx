type ButtonProps = {
  click?: () => void;
  label?: string;
};

const Button = ({ click = () => {}, label = "button" }: ButtonProps) => {
  return <button onClick={click}>{label}</button>;
};

export default Button;
