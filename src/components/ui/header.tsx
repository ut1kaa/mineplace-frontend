"use client"
import { useEffect, useState } from "react";
import styles from '@/styles/components/ui/header.module.scss'
import { Logo } from "@/components/label/Logo";
import { CustomButton } from "@/components/ui/buttons";

import { InitNavBar } from "@/components/ui/navBar";

import SeachIcon from "$/assets/icons/search.svg"
import BurgerIcon from "$/assets/icons/burger.svg"
import CrossIcon from "$/assets/icons/cross.svg"

import virables from "@/styles/exportedVirables.module.scss";

const MobileHeader = () => {
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [showBurger, setShowBurger] = useState<boolean>(false);

    const test_links = [
        {
          name: "Моды",
          to: "/mods",
        },
        {
          name: "Плагины",
          to: "/plugins",
        },
        {
          name: "Датапаки",
          to: "/datapacks",
        },
        {
          name: "Шейдеры",
          to: "/shaders",
        },
        {
          name: "Ресурспаки",
          to: "/resourcepacks",
        },
      ];

    return (
        <div className={styles.mobile_header}>
            <div className={styles.main_tab}>
                <div className={styles.content}>
                <section className={styles.logo}>
                    <Logo />
                </section>
                <section className={styles.open_nav}>
                    <button onClick={() => {setShowBurger(false); setShowSearch(!showSearch)} }>
                        <div className={`${styles.search_icon} ${showSearch === true ? styles.activeSearch : styles.inactiveSearch}`}>
                            <SeachIcon/>
                            <span>Поиск</span>
                        </div>
                    </button>
                </section>
                <section className={styles.burger}>
                    <button onClick={() => {setShowSearch(false); setShowBurger(!showBurger)}}>
                        <div className={`${styles.burger_icon} ${showBurger === false ? styles.activeIcon : styles.inactiveIcon}`}>
                            <BurgerIcon/>
                        </div>
                        <div className={`${styles.cross_icon} ${showBurger === true ? styles.activeIcon : styles.inactiveIcon}`}>
                            <CrossIcon/>
                        </div>
                    </button>
                </section>
                </div>
            </div>
            <div className={`${styles.burgerTab} ${showBurger === true ? styles.activeTab : styles.inactiveTab}`}>
                <CustomButton colors={{background_color: virables.lightButton_hex, text_color: virables.lightButton_text_hex}} text="Войти" redirectTo="/singIn"/>
                <CustomButton colors={{background_color: virables.darkLightButton_hex, text_color: virables.darkLightButton_text_hex}} redirectTo="/singUp" text="Создать аккаунт"/>
            </div>
            <div className={`${styles.searchTab} ${showSearch === true ? styles.activeTabSearch : styles.inactiveTab}`}>
                <InitNavBar navList={test_links} activeHighligth={true} mobile={true}/>
            </div>
          </div>
    );
}

export {MobileHeader};