"use client"
import { useEffect, useState } from "react";
import styles from '@/styles/components/ui/header.module.scss'
import { Logo } from "@/components/label/Logo";
import { CustomButton, DarkButton, OutlineButton } from "@/components/ui/buttons";

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
          to: "/search?add-on=mod",
          page_name: "mod",
        },
        {
          name: "Плагины",
          to: "/search?add-on=plugins",
          page_name: "plugins",
        },
        {
          name: "Датапаки",
          to: "/search?add-on=data_pack",
          page_name: "data_pack",
        },
        {
          name: "Шейдеры",
          to: "/search?add-on=shader",
          page_name: "shader",
        },
        {
          name: "Ресурспаки",
          to: "/search?add-on=resource_pack",
          page_name: "resource_pack",
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
                <InitNavBar navList={test_links} activeHighligth={true} mobile={true} activeParam={"add-on"}/>
            </div>
          </div>
    );
}

import { isTokenValid } from "../../app/utils/token";
import { useRouter } from "next/router";
import Link from "next/link";

const AuthSection = () => {
  const [user, setUser] = useState<{ uuid: string; username: string; email: string; paasword_hash: string; profile_picture?: string; created_at: string} | null>(null);

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");

    if (!isTokenValid(token)) {
      setUser(null);
      return;
    }

    try {
      const response = await fetch("/api/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        const errorData = await response.json();
        console.error("Ошибка при получении данных пользователя:", errorData.error);
        setUser(null);
        if (response.status === 401) {
            // localStorage.removeItem("access_token");
            // router.push('/signIn');
        }
      }
    } catch (error) {
      console.error("Сетевая ошибка при получении данных пользователя:", error);
      setUser(null);
    } finally {
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []); 

  const handleLogout = async () => {
    try {
        await fetch("/api/logout", { method: "POST" });
        localStorage.removeItem("token");
        window.location.reload();
    } catch (error) {
        console.error("Ошибка при выходе:", error);
    }
};


  return (
    <section className={styles.buttonsRows}>
      {user ? (
        <div className={styles.userInfo}>
          {user.profile_picture && <img src={user.profile_picture} alt="Аватар" className={styles.avatar} />}
          <Link href={`/user`} passHref> {/* Или `/user/${user.username}` */}
            <span>Привет, <span className={styles.username}>{user.username}</span>! </span>
          </Link>
          <OutlineButton text="Выйти" isGradient={true} onClick={handleLogout} />
        </div>
      ) : (
        <>
          <DarkButton text="Войти" redirectTo="/singIn" />
          <OutlineButton isGradient={true} redirectTo="/singUp" text="Создать аккаунт" />
        </>
      )}
    </section>
  );
};


export {MobileHeader, AuthSection};