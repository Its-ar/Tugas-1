import styles from "./styles.module.css";

const Button = ({ children, round }) => {
  const buttonStyle = round ? styles.roundButton : styles.button;
  return <button className={buttonStyle}>{children}</button>;
};

export default Button;
