import { GradientButton, OutlineButton } from "@/components/ui/buttons";
import { Logo } from "@/components/label/Logo";

import MainPattern from  '$/assets/patterns/MainBackground.svg'

import styles from "@/styles/(main)/page.module.scss";
import TextAnimation from "@/components/label/textAnimation";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <span>
            <h2>Здесь можно найти</h2>
            <h1>Minecraft</h1>
          </span>
          <h2 className={styles.animatetedLabel}><TextAnimation/></h2>
          <p>Играй, делись, изучай Minecraft дополнения
            через нашу открытую платформу созданную для сообщества.
          </p>
          <GradientButton text="Исследовать"/>
          <OutlineButton text="Создать аккаунт"/>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.mainParrern}>
          <MainPattern/>
        </div>
      </div>
    </>
  );
}
