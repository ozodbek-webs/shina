import "./Buttons.scss";
const Button = ({ text, Btntype }) => {
  return <button className={"btn__" + Btntype}>{text}</button>;
};

export { Button };
