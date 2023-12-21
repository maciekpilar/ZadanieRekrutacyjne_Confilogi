import styles from "./Button.module.scss";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  variant: "primaryButton" | "outlinedButton" | "secondaryButton";
  buttonText: string;
  fullWidth?: boolean;
}

const Button = ({ type, variant, buttonText, fullWidth }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${variant} ${fullWidth ? styles.buttonFullWidth : ""}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
