import { GradientButton, OutlineButton } from "@/components/ui/buttons";
import { Logo } from "@/components/label/Logo";
import { OutlineBlock } from "@/components/ui/outlineBlock";

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
      <div className={styles.categories_layout}>
          <p>Популярные</p>
          <h1>категории</h1>
          <div className={styles.categories}>

        </div>
      </div>
      <div className={styles.players_section}>
        <div className={styles.label}>
          <span>Для игроков</span>
        </div>
        <div className={styles.label_info}>
          <h1>Изучи остальные дополнения</h1>
          <p>Будь уверен, что сможешь найти любое дополнение:
             от обычных биомов до мистических модов -
              которые смогут вывести вашу игру на новый уровень.</p>
        </div>
        <div className={styles.content}>
          <div className={styles.block}>
            <div className={styles.preview}>
              <OutlineBlock>
                <div className={styles.search_content}>
                  <p>Прикол</p>
                </div>
              </OutlineBlock>
            </div>
            <div className={styles.info}>
              <h1>Ищи то, что тебе нужно, быстро и легко</h1>
              <p>Mineplace позволяет использовать молниеностный поиск и мощные фильтры которые помогут найти любое дополнение.</p>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.info}>
              <h1>Следи за любимыми дополнениями</h1>
              <p>Получай уведомления каждый раз когда избранные дополнения обновляются.</p>
            </div>
            <div className={styles.preview}>
              <OutlineBlock>
                  <div className={styles.follow_content}>
                  </div>
                </OutlineBlock>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.preview}>
              <OutlineBlock>
                <div className={styles.support_content}>
                </div>
              </OutlineBlock>
            </div>
            <div className={styles.info}>
              <h1>Общайся и получай поддержку</h1>
              <p>Обсуждай любое дополнение с сообществом и получай поддержку от разработчиков.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
