import styles from "../styles/loginButton.module.scss";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export  const Button = ({children,...props} : ButtonProps) => {
  return <button {...props} className={styles.Button} >
    {children}

  </button>;
};
