"use client"
import Link from "next/link";
import { useRef, useLayoutEffect, useState} from 'react';

import styles from "@/styles/components/ui/navBar.module.scss"


type NavBarProps = {
    navList: { name: string; to: string; ref?: React.RefObject<any>;}[],
    activeHighligth?: boolean,
    activeTab?: number | undefined,
  };
  
const InitNavBar: React.FC<NavBarProps> = ({ navList, activeHighligth = false, activeTab = undefined}) => {
    
    activeHighligth=true;
    activeTab=0;

    const [width, setWidth] = useState(0);

    
    useLayoutEffect(() => {
        setWidth(navList[activeTab].ref!.current.offsetWidth);
      }, []);

    navList.forEach(item => {
        item.ref = useRef(null);
      });

    // console.log(navList[activeTab].ref!.current.offsetWidth)

      return (
        <nav className={styles.layout}>
            {navList.map((link => (
                <div className={styles.children}>
                    <Link ref={link.ref} href={link.to}>{link.name}</Link>
                </div>
            )))}
            {activeHighligth && typeof activeTab !== undefined && navList[activeTab]?.ref ? ( 
                <div className={styles.activeTabLine}>
                        <div className="activeTabSize">
                        <svg width="100%" height="5" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="100" y2="0" stroke-linecap="round" />
                        </svg>
                        <style jsx>{`
                            .activeTabSize {
                                width: ${width}px;
                                height: 5px;
                            }
                        `}</style>
                    </div>
                </div>
            ) : ""}
        </nav>
    );
    
};

export { InitNavBar };