"use client"

import { useState, useEffect } from 'react';
import styles from '@/styles/components/label/textAnimation.module.scss';



const TextAnimation = ({ texts }: { texts: string[] }) => {
    const [index, setIndex] = useState(0);
    const [isPageLoaded, setPageLoaded] = useState(false);
    const [isFirstSlide, setFirstSlide] = useState(true);

    useEffect(() => {
        setPageLoaded(true);

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setFirstSlide(false);
        }, 3000);

        return () => clearInterval(interval);
        
    }, []);

    return (
      <div className={styles.container}>
        <div className={`${styles.text} ${isPageLoaded ? (isFirstSlide ? styles.firstAnimation : styles.Animation) : ''}`}>
            {texts[index]}
        </div>
      </div>
    );
  };
  
  export default TextAnimation;