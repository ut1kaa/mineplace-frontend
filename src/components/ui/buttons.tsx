import styles from "@/styles/components/ui/buttons.module.scss";

type DarkButtonProps = {
    text: string;
  }
  
  const DarkButton: React.FC<DarkButtonProps> = ({ text }) => {
    return (
        <button className={styles.darkButton}>
            {text}
        </button>
    );
}

const OutlineButton: React.FC<DarkButtonProps> = ({ text }) => {
    return (
        <button className={styles.outlineButton}>
            {text}
        </button>
    );
}

export {DarkButton, OutlineButton};