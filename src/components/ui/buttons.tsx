import styles from "@/styles/components/ui/buttons.module.scss";
import virables from "@/styles/exportedVirables.module.scss";

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
            <svg width="170" height="48">
                <defs>
                    <linearGradient id="outline-button-gradient">
                        <stop offset="0%" stopColor={virables.outlineButton_gradient_start}/>
                        <stop offset="100%" stopColor={virables.outlineButton_gradient_stop} />
                    </linearGradient>
                </defs>
                <rect x="1" y="1" rx="18" fill="none" stroke="url(#outline-button-gradient)" width="168" height="36"></rect>
            </svg>
            <span>{text}</span>
        </button>
    );
}

export {DarkButton, OutlineButton};