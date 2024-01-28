import styles from "@/styles/components/ui/buttons.module.scss";
import virables from "@/styles/exportedVirables.module.scss";

import {addRandomChars} from "@/utils/idGenerator";

type ButtonProps = {
    text: string;
}

type OutlineButtonProps = {
    text: string;
    isGradient?: boolean;
}
  
const DarkButton: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button className={`${styles.darkButton} ${styles.action}`}>
            {text}
        </button>
    );
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ text, isGradient=false}) => {
    const elementId = addRandomChars("outline-button-gradient");
    const url = `url(#${elementId})`;

    return (
        <button className={`${styles.outlineButton} ${styles.action}`}>
            <svg width="170" height="48">
                <defs>
                    <linearGradient id={elementId}>
                        <stop offset="0%" stopColor={isGradient ? virables.outlineButton_gradient_start : "#ffffff"}/>
                        <stop offset="100%" stopColor={isGradient ? virables.outlineButton_gradient_stop : "#ffffff"} />
                    </linearGradient>
                </defs>
                <rect x="1" y="1" rx="18" fill="none" stroke={url} width="168" height="36"></rect>
            </svg>
            <span className={isGradient ? styles.gradientText : styles.generalText}>{text}</span>
        </button>
    );
}

const GradientButton: React.FC<ButtonProps> = ({text}) => {
    return (
        <button className={`${styles.gradientButton} ${styles.action}`}>
            {text}
        </button>
    );
}

export {DarkButton, OutlineButton, GradientButton};