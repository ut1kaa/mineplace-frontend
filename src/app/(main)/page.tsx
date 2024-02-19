import styles from "@/styles/(main)/page.module.scss";

import MainPattern from '$/assets/patterns/MainBackground.svg'
import Notify from '$/assets/icons/notify.svg'
import LinkLogo from '$/assets/icons/link.svg'
import Dollar from '$/assets/icons/dollar.svg'
import StatisticLogo from '$/assets/icons/statistic.svg'
import CodeTogether from '$/assets/icons/code_together.svg'
import FeedbackLogo from '$/assets/icons/feedback.svg'
import HelpLogo from '$/assets/icons/help.svg'

import TextAnimation from "@/components/label/textAnimation";
import { Search, Select, MultiSelect } from "@/components/ui/input";
import Triangle from "@/components/ui/categories";
import { GradientButton, OutlineButton } from "@/components/ui/buttons";
import { Logo } from "@/components/label/Logo";
import { OutlineBlock, OutlineSubBlock } from "@/components/ui/outlineBlocks";


export default function Home() {
  const texts = ["моды", "плагины", "датапаки", "шейдеры", "ресурспаки"];


  const sort_option = [
    {
      name: "Возрастанию",
      id: "down-up"
    },
    {
      name: "Загрузкам",
      id: "downloads"
    }, 
    {
      name: "Новизне",
      id: "newest"
    }, 
    {
      name: "Обновлению",
      id: "update"
    }, 
  ]
  
  const selectedOption = 
    {
      name: "Возрастанию",
      id: "down-up"
    }
  
  const selectedOptions = [
    {
      name: "Возрастанию",
      id: "down-up"
    }
  ]

  const data = [
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 4, content: 'Item 4' },
    { id: 5, content: 'Item 5' },
    { id: 6, content: 'Item 6' },
    { id: 7, content: 'Item 7' },
    { id: 8, content: 'Item 8' },
    { id: 9, content: 'Item 9' },
    { id: 10, content: 'Item 10' },
    { id: 11, content: 'Item 11' },
    { id: 12, content: 'Item 12' },
  ];

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
          <Triangle data={data} /> 
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
                  <Search standartValue={"Скачать мод на вику"}/>
                  <div className={styles.selectLayout}>
                    <p>Сортировать по</p>
                    <div className={styles.SelectComponent}>
                      {/* <MultiSelect info={{label: "Сортировка", name: "sort"}} options={sort_option} standartSelectedOptions={selectedOptions}/> */}
                      <Select info={{label: "Сортировка", name: "sort"}} options={sort_option} standartSelectedOption={selectedOption}/>
                    </div>
                  </div>
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
                    <div className={styles.follow_label}>
                      <Notify/>
                      <span>Уведомления</span>
                    </div>
                    <OutlineSubBlock style={{width: "100%", height: "70px"}}></OutlineSubBlock>
                    <OutlineSubBlock style={{width: "100%", height: "200px"}}></OutlineSubBlock>
                    <OutlineSubBlock style={{width: "100%", height: "40px"}}></OutlineSubBlock>
                  </div>
                </OutlineBlock>
            </div>
          </div>
          <div className={styles.block}>
            <div className={styles.preview}>
              <OutlineBlock>
                <div className={styles.support_content}>
                  <div className={styles.chat_message_left}>
                    <OutlineSubBlock style={{width: "30px", height: "30px", marginRight: "0.5rem"}}></OutlineSubBlock>
                    <OutlineSubBlock style={{width: "40%", height: "100px"}}></OutlineSubBlock>
                  </div>
                  <div className={styles.chat_message_right}>
                    <OutlineSubBlock style={{width: "40%", height: "60px"}}></OutlineSubBlock>
                    <OutlineSubBlock style={{width: "30px", height: "30px", marginLeft: "0.5rem"}}></OutlineSubBlock>
                  </div>
                  <div className={styles.chat_message_left}>
                    <OutlineSubBlock style={{width: "30px", height: "30px", marginRight: "0.5rem"}}></OutlineSubBlock>
                    <OutlineSubBlock style={{width: "25%", height: "30px"}}></OutlineSubBlock>
                  </div>
                  <div className={styles.chat_message_right}>
                    <OutlineSubBlock style={{width: "35%", height: "30px"}}></OutlineSubBlock>
                    <OutlineSubBlock style={{width: "30px", height: "30px", marginLeft: "0.5rem"}}></OutlineSubBlock>
                  </div>
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
      <div className={styles.creators_section}>
        <div className={styles.content}>
          <div className={styles.label}>
            <span>Для создателей</span>
          </div>
          <div className={styles.label_info}>
            <h1>Делись своим контентом со всем миром</h1>
            <p>Создай страницу для своих творений и набери аудиторию заинтересованных игроков.</p>
          </div>
          <div className={styles.creators_cards}>
            <div className={styles.creators_card}>
              <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                <div className={styles.card_label}>
                  <h1>Делитесь</h1>
                  <p>Пусть тысячи игроков со всего интернета узнают о вашем проекте.</p>
                </div>
              </OutlineSubBlock>
              <div className={styles.card_icon}>
                <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                  <div className={styles.icon}>
                    <LinkLogo/>
                  </div>
                </OutlineSubBlock>
              </div>
            </div>
            <div className={styles.creators_card}>
              <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                <div className={styles.card_label}>
                  <h1>Монетизируйте</h1>
                  <p>Зарабатывайте, получатей переводы на своём проекте и выводите на свой кошелёк в любое время.</p>
                </div>
              </OutlineSubBlock>
              <div className={styles.card_icon}>
                <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                  <div className={styles.icon}>
                    <Dollar/>
                  </div>
                </OutlineSubBlock>
              </div>
            </div>
            <div className={styles.creators_card}>
              <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                <div className={styles.card_label}>
                  <h1>Статистика</h1>
                  <p>Просматревайте подробную стратистику о вашем проекте в соответвующем разделе</p>
                </div>
              </OutlineSubBlock>
              <div className={styles.card_icon}>
                <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                  <div className={styles.icon}>
                    <StatisticLogo/>
                  </div>
                </OutlineSubBlock>
              </div>
            </div>
            <div className={styles.creators_card}>
              <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                <div className={styles.card_label}>
                  <h1>Разрабатывайте вместе</h1>
                  <p>Пригласите коллег в свою команду и разрабатывайте проект вместе</p>
                </div>
              </OutlineSubBlock>
              <div className={styles.card_icon}>
                <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                  <div className={styles.icon}>
                    <CodeTogether/>
                  </div>
                </OutlineSubBlock>
              </div>
            </div>
            <div className={styles.creators_card}>
              <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                <div className={styles.card_label}>
                  <h1>Обратная связь</h1>
                  <p>Получайте мнгновенную обратную связь от пользователей.</p>
                </div>
              </OutlineSubBlock>
              <div className={styles.card_icon}>
                <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                  <div className={styles.icon}>
                    <FeedbackLogo/>
                  </div>
                </OutlineSubBlock>
              </div>
            </div>
            <div className={styles.creators_card}>
              <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                <div className={styles.card_label}>
                  <h1>Помощь</h1>
                  <p>Свяжитесь с командой Mineplace и мы поможем с решением проблемы.</p>
                </div>
              </OutlineSubBlock>
              <div className={styles.card_icon}>
                <OutlineSubBlock style={{width: "100%", height: "100%"}}> 
                  <div className={styles.icon}>
                    <HelpLogo/>
                  </div>
                </OutlineSubBlock>
              </div>
            </div>
          </div>
        </div>
      <div className={styles.creators_background}></div>
      </div>
      <div className={styles.slogan_section}>
        <div className={styles.slogan_label}>
          <h2>Будь вместе с</h2>
          <h1>Mineplace</h1>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.slogan_button}>
          <GradientButton redirectTo="/search" text="Исследовать"/>
        </div>
        <div className={styles.slogan_background}></div>
      </div>
    </>
  );
}
