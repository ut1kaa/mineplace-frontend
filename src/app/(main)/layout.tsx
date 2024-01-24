import { TextLogo } from "@/components/label/Logo";
import { InitNavBar } from "@/components/ui/navBar";
import { DarkButton, OutlineButton } from "@/components/ui/buttons";

import styles from "@/styles/(main)/layout.module.scss";

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
              <section className={styles.buttonsRow}>
                <DarkButton text="Войти"/>
                <OutlineButton text="Создать аккаунт"/>
              </section>
          </header>
          {children}
        </div>
      </div>
  );
}
