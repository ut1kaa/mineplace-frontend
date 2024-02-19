import { TextLogo, Logo } from "@/components/label/Logo";
import { InitNavBar } from "@/components/ui/navBar";
import { DarkButton, OutlineButton } from "@/components/ui/buttons";

import SeachIcon from "$/assets/icons/search.svg"
import BurgerIcon from "$/assets/icons/burger.svg"

import styles from "@/styles/(main)/layout.module.scss";

import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {

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
      <div className={styles.layout}>
          <header className={styles.header}>
            <div className={styles.content}>
              <section className={styles.logo}>
                <TextLogo />
              </section>
              <section className={styles.navRows}>
                <InitNavBar navList={test_links} activeHighligth={true}/>
              </section>
              <section className={styles.buttonsRows}>
                <DarkButton text="Войти" redirectTo="/singIn"/>
                <OutlineButton isGradient={true} redirectTo="/singUp" text="Создать аккаунт"/>
              </section>
            </div>
          </header>
          <header className={styles.mobile_header}>
            <div className={styles.content}>
              <section className={styles.logo}>
                <Logo />
              </section>
              <section className={styles.open_nav}>
                <button>
                  <SeachIcon/>
                  <span>Поиск</span>
                </button>
              </section>
              <section className={styles.burger}>
                <button>
                  <BurgerIcon/>
                </button>
              </section>
            </div>
          </header>
          <div className={styles.children}>
            <div className={styles.content}>
              {children}
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.content}>
              <div className={styles.footer_above}>
                <section className={styles.footer_info}>
                  <div className={styles.footer_label}><TextLogo /></div>
                  <p>Mineplace это проект с открытым <a 
                    className={styles.source_code} 
                    href={process.env.NEXT_PUBLIC_GITHUB_PROJECT_LINK}
                    rel="noopener noreferrer"
                    target="_blank"
                    >исходным кодом</a>.
                  </p>
                  <p>© Mineplace, Inc.</p>
                </section>
                <section className={styles.footer_links}>
                  <section className={styles.footer_row}>
                    <p className={styles.footer_label}>Компания</p>
                    <Link href={"/company/terms"}>Условия</Link>
                    <Link href={"/company/privacy"}>Конфиденциальность</Link>
                    <Link href={"/company/rules"}>Правила</Link>
                  </section>
                  <section className={styles.footer_row}>
                    <p className={styles.footer_label}>Ресурсы</p>
                    <Link href={"/blog"}>Блог</Link>
                    <Link href={"/docs"}>Документация</Link>
                    <a href="https://github.com/">GitHub</a>
                  </section>
                  <section className={styles.footer_row}>
                    <p className={styles.footer_label}>Соц. сети</p>
                    <a href="https://discord.com/" rel="noopener noreferrer" target="_blank">Discord</a>
                    <a href="https://t.me/" rel="noopener noreferrer" target="_blank">Telegram</a>
                    <a href="https://vk.com/" rel="noopener noreferrer" target="_blank">Вконтакте</a>
                  </section>
                </section>
                <section className={styles.footer_buttons}>
                  <OutlineButton isGradient={true}  text="Создать аккаунт" redirectTo="/singUp"/>
                  <DarkButton text="Настройки" redirectTo="/settings"/>
                </section>
              </div>
              <div className={styles.footer_below}>
                <p>НЕ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМИ ПРОДУКТОМ MINECRAFT. НЕ ОДОБРЕНО КОМПАНИЕЙ MOJANG И НЕ СВЯЗАНО С НЕЙ.</p>
              </div>
            </div>
          </footer>
        </div>
  );
}
