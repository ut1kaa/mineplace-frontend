"use client"

import styles from "@/styles/components/ui/buttons.module.scss";
import virables from "@/styles/exportedVirables.module.scss";

import {addRandomChars} from "@/utils/idGenerator";

import { useRouter } from 'next/navigation'
import { OutlineSubBlock } from "./outlineBlocks";


const DarkButton = ({ text, redirectTo }: {text: string; redirectTo?: string}) => {
    const router = useRouter();  

    return (
        <button className={`${styles.darkButton} ${styles.action}`} onClick = {redirectTo ? () => router.push(redirectTo) : () => ""}>
            {text}
        </button>
    );
}

const CustomButton = ({ text, redirectTo, colors, innerKey }: {text: string; redirectTo?: string, colors: {background_color: string, text_color: string}, innerKey?: string}) => {
    const router = useRouter();  

    return (
        <button key={innerKey} className={`${styles.customButton} ${styles.action}`} style={{backgroundColor: colors.background_color, color: colors.text_color}} onClick={redirectTo ? () => router.push(redirectTo) : () => ""}>
            {text}
        </button>
    );
}

const OutlineButton = ({ text, isGradient=false, redirectTo}: {text: string; isGradient?: boolean; redirectTo?: string;}) => {
    const router = useRouter();  
    const elementId = addRandomChars("outline-button-gradient");
    const url = `url(#${elementId})`;

    return (
        <button className={`${styles.outlineButton} ${styles.action}`} onClick = {redirectTo ? () => router.push(redirectTo) : () => ""}>
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

const GradientButton = ({ text, redirectTo }: {text: string; redirectTo?: string}) => {
    const router = useRouter();  
    return (
        <button className={`${styles.gradientButton} ${styles.action}`} onClick = {redirectTo ? () => router.push(redirectTo) : () => ""}>
            {text}
        </button>
    );
}

const BlockButton = ({children, redirectTo}: {children?: React.ReactNode; redirectTo?: string; }) => {
    const router = useRouter();  
    const elementId = addRandomChars("outline-button-gradient");
    const url = `url(#${elementId})`;

    return (
        <button className={`${styles.BlockButton} ${styles.action}`} onClick = {redirectTo ? () => router.push(redirectTo) : () => ""}>
            <OutlineSubBlock style={{height:"100%", width:"100%"}}>
                <div className={styles.BlockButtonContent}>
                    {children}
                </div>
            </OutlineSubBlock>
        </button>
    );

    // return (
    //     <OutlineSubBlock style={{height:"55px", width:"100%"}}>
    //     <div className={styles.search}>
    //         <input type="text" value={value} onChange={handleChange} placeholder="Поиск..." id={elementId} name="search"/>
    //         <SeachIcon />
    //         <label htmlFor={elementId}>Поиск...</label>
    //     </div>
    //   </OutlineSubBlock>
    // );
}

export {CustomButton, DarkButton, OutlineButton, GradientButton, BlockButton};