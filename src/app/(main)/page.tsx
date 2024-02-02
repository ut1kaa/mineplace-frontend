import { GradientButton, OutlineButton } from "@/components/ui/buttons";
import { Logo } from "@/components/label/Logo";

import MainPattern from  '$/assets/patterns/MainBackground.svg'

import styles from "@/styles/(main)/page.module.scss";
import TextAnimation from "@/components/label/textAnimation";

export default function Home() {
  const texts = ["моды", "плагины", "датапаки", "шейдеры", "ресурспаки"];

  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <span>
            <h2>Здесь можно найти</h2>
            <h1>Minecraft</h1>
          </span>
          <h2 className={styles.animatetedLabel}><TextAnimation texts={texts}/></h2>
          <p>Играй, делись, изучай Minecraft дополнения
            через нашу открытую платформу созданную для сообщества.
          </p>
          <GradientButton redirectTo="/search" text="Исследовать"/>
          <OutlineButton redirectTo="/signUp" text="Создать аккаунт"/>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.mainPattern}>
          <MainPattern/>
        </div>
      </div>
      <div className={styles.line_layout}>
        <div className={styles.line}>
          <div className={styles.content}>
            <section>
              <h1>4.5k+</h1>
              <p>Разработчиков</p>
            </section>
            <section>
              <h1>56k+</h1>
              <p>Дополнений</p>
            </section>
            <section>
              <h1>0.3%</h1>
              <p>Плохих отзывов</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
