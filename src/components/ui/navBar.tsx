"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useRef, useLayoutEffect, useState} from 'react';
import virables from "@/styles/exportedVirables.module.scss";
import { CustomButton } from "@/components/ui/buttons";

import styles from "@/styles/components/ui/navBar.module.scss"
import variables from "@/styles/exportedVirables.module.scss";


const InitNavBar = ({ navList, activeHighligth = false, mobile = false}: {navList:{ name: string; to: string; ref?: React.RefObject<any>;}[];  mobile?: boolean; activeHighligth?: boolean}) => {
    var activeTabSize;

    var activeTab: number;

    if (activeHighligth) {
        const pathname = usePathname()
    
        activeTab = navList.findIndex(item => item.to === pathname);
    
        const [width, setWidth] = useState(0);
        const [left, setLeft] = useState(0);
        
        activeTabSize = {
            position: "absolute" as "absolute",
            width: (activeTab < 0 || activeTab > navList.length) ? "50px" : `${width}px`,
            opacity: (activeTab < 0 || activeTab > navList.length) ? "0" : "1",
            transform: (activeTab < 0 || activeTab > navList.length) ? "translateX(-100px)" : `translateX(calc(${left}px - ${variables.margin_px}px))`,
            height: "5px",
            transition: "transform 0.2s ease-in-out, opacity 0.1s ease-in-out",
        }

        useLayoutEffect(() => {
            // console.log(navList[activeTab]);
            if ((activeTab >= 0 && activeTab <= navList.length) && !mobile)  {
                // console.log(activeTab);
                // const rect = navList[activeTab].ref!.current.getBoundingClientRect();
                // setLeft(rect.left);
                // setWidth(rect.width);
    
                const childRect = navList[activeTab].ref!.current.getBoundingClientRect();
                const parentRect = navList[activeTab].ref!.current.parentNode.parentNode.getBoundingClientRect();
          
                const left = childRect.left - parentRect.left;
          
                setLeft(left);
                setWidth(childRect.width);
            }
    
          }, [navList[activeTab]]);
    }
    
    navList.forEach(item => {
        item.ref = useRef(null);
      });

      return (
        <>  
            { mobile ? (
                <nav className={styles.mobile_layout}>
                    {navList.map((link => (
                        <div className={styles.children} key={link.to}>
                            {/* <Link ref={link.ref} href={link.to}>{link.name}</Link> */}
                            <CustomButton
                                colors={{
                                    background_color: activeTab >= 0 && activeTab < navList.length && navList[activeTab].to === link.to ? virables.lightButton_hex : virables.darkLightButton_hex,
                                    text_color: activeTab >= 0 && activeTab < navList.length && navList[activeTab].to === link.to ? virables.lightButton_text_hex : virables.darkLightButton_text_hex
                                }}
                                innerKey={link.to}
                                text={link.name} 
                                redirectTo={link.to}
                            />
                        </div>
                    )))}
                </nav> ) : (
                <nav className={styles.layout}>
                {navList.map((link => (
                    <div className={styles.children} key={link.to}>
                        <Link ref={link.ref} href={link.to}>{link.name}</Link>
                    </div>
                )))}
                { activeHighligth ? 
                    <div className={styles.activeTabLine}>
                        <div style={activeTabSize}>
                            {/* <svg width="100%" height="4" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <line x1="0" y1="1" x2="100" y2="1" />
                            </svg> */}
                            <div className={styles.line}>
                            </div>
                        </div>
                    </div> : ""
                }
                </nav> )
            }

        </>

    );
    
};

export { InitNavBar };