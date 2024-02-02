import {addRandomChars} from "@/utils/idGenerator";

import styles from "@/styles/components/ui/outlineBlock.module.scss";
import virables from "@/styles/exportedVirables.module.scss";

const OutlineBlock = ({ children }: { children: React.ReactNode; }) => {
    const elementId = addRandomChars("outline-block-gradient");
    const url = `url(#${elementId})`;

    return (
        <div className={styles.outlineBlock}>
            <svg width="100%" height="100%">
                <defs>
                    <linearGradient id={elementId} gradientTransform="rotate(270) translate(-1, 0)">
                        <stop offset="0%" stopColor={virables.block_outline_gradient_start}/>
                        <stop offset="100%" stopColor={virables.block_outline_gradient_stop}/>
                    </linearGradient>
                </defs>
                <rect x="0" y="0" rx="25" fill="none" stroke={url} width="100%" height="100%"></rect>
            </svg>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export {OutlineBlock};