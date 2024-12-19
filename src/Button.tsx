import styles from './Button.module.css';

type ButtonProps = {
  onClick?: () => void;
  text?: string;
};

function Button({ onClick, text = 'Click me' }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}
export default Button;
