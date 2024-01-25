import { TextLogo } from "@/components/label/Logo";
import { InitNavBar } from "@/components/ui/navBar";
import { DarkButton, OutlineButton } from "@/components/ui/buttons";

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
      to: "/mods"
    },
    {
      name: "Плагины",
      to: "/plugins"
    },
    {
      name: "Датапаки",
      to: "/datapacks"
    },
    {
      name: "Шейдеры",
      to: "/shaders"
    },
    {
      name: "Ресурспаки",
      to: "/resourcepacks"
    },
  ];


  return (
      <div className={styles.layout}>
        <div className={styles.content}>
          <header className={styles.header}>
              <section className={styles.logo}>
                <TextLogo />
              </section>
              <section className={styles.navRows}>
                <InitNavBar navList={test_links} activeHighligth={true}/>
              </section>
              <section className={styles.buttonsRows}>
                <DarkButton text="Войти"/>
                <OutlineButton text="Создать аккаунт"/>
              </section>
          </header>
          {children}
          <footer className={styles.footer_layout}>
            <div className={styles.footer}>
              <div className={styles.footer_above}>
                <section className={styles.footer_info}>
                  <TextLogo />
                  <p>Mineplace это проект с открытыми <a href="https://github.com/">исходным кодом</a>.</p>
                  <p>© Mineplace, Inc.</p>
                </section>
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
                  <a href="https://discord.com/">Discord</a>
                  <a href="https://t.me/">Telegram</a>
                  <a href="https://vk.com/">Вконтакте</a>
                </section>
                <section className={styles.footer_row}>
                  <OutlineButton text="Создать аккаунт"/>
                  <DarkButton text="Настройки"/>
                </section>
              </div>
              <div className={styles.footer_below}>
                <p>НЕ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМИ ПРОДУКТОМ MINECRAFT. НЕ ОДОБРЕНО КОМПАНИЕЙ MOJANG И НЕ СВЯЗАНО С НЕЙ.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
  );
}
