import styles from "@/styles/(main)/add-on/page.module.scss";

import { OutlineBlock, OutlineSubBlock } from "@/components/ui/outlineBlocks";
import { Search, Select, CheckBox, MultiSelect } from "@/components/ui/input";
import { OutlineButton, BlockButton, DarkButton, GradientButton } from "@/components/ui/buttons";

import RemapLogo from '$/assets/icons/remap.svg'
import ClearLogo from '$/assets/icons/clear.svg'

import Image from 'next/image';

import Lib from '$/assets/icons/categories/library.svg'
import WorldGeneration from '$/assets/icons/categories/WorldGenerationIcon.svg'
import Decoration from '$/assets/icons/categories/DecoranionIcon.svg'
import Food from '$/assets/icons/categories/FoodIcon.svg'
import GamePlay from '$/assets/icons/categories/GameMechanicsIcon.svg'
import Magic from '$/assets/icons/categories/MagicIcon.svg'
import Managment from '$/assets/icons/categories/ManagmentIcon.svg'
import MiniGames from '$/assets/icons/categories/MinigameIcon.svg'
import Mobs from '$/assets/icons/categories/MobsIcon.svg'
import Optimisation from '$/assets/icons/categories/OptimisationIcon.svg'
import Adventure from '$/assets/icons/categories/AdventureIcon.svg'
import Cursed from '$/assets/icons/categories/CursedIcon.svg'
import Equip from '$/assets/icons/categories/EquipmentIcon.svg'
import Social from '$/assets/icons/categories/SocialIcon.svg'
import Tech from '$/assets/icons/categories/TehnologyIcon.svg'
import Transport from '$/assets/icons/categories/TransportIcon.svg'
import Util from '$/assets/icons/categories/UtilityIcon.svg'
import Storage from '$/assets/icons/categories/StorageIcon.svg'
import Economy from '$/assets/icons/categories/EconomyIcon.svg'

import Fabric from '$/assets/icons/categories/FabricIcon.svg'
import Forge from '$/assets/icons/categories/ForgeIcon.svg'
import NeoForge from '$/assets/icons/categories/NeoForgeIcon.svg'
import Quilt from '$/assets/icons/categories/QuiltIcon.svg'
import LiteLoader from '$/assets/icons/categories/LiteLoaderIcon.svg'
import Risugami from '$/assets/icons/categories/RMLoaderIcon.svg'


import Client from '$/assets/icons/categories/Client.svg'
import Server from '$/assets/icons/categories/StorageIcon.svg'

import backCard from "$/assets/img/cards/card/back.png";
import profilePic from "$/assets/img/cards/card/icon.png";
import Link from "next/link";

import Heart from '$/assets/icons/heart.svg';
import Update from '$/assets/icons/update.svg';
import Download from '$/assets/icons/download.svg';
import { InitNavBar } from "@/components/ui/navBar";

export default async function Addon() {

    const test_links = [
        {
          name: "Описание",
          to: "/add-on?page=discription",
          page_name: "discription",
        },
        {
          name: "Галерея",
          to: "/add-on?page=gallery",
          page_name: "gallery",
        },
        {
          name: "История изменений",
          to: "/add-on?page=changelog",
          page_name: "changelog",
        },
        {
          name: "Версии",
          to: "/add-on?page=versions",
          page_name: "versions",
        },
      ];

    return (
        <>
            <div className={styles.addon_block}>
                <div className={styles.left_side}>
                    <div>
                        <OutlineBlock style={{padding: "1.2rem"}}>
                        <div className={styles.content}>
                            <div className={styles.name}>
                                <Image src={profilePic} alt="profilepic" width={100} height={100} />
                                <div>
                                <h1>Catumn</h1>
                                <p>от <Link href=""><u>catuser123</u></Link></p>
                                </div>
                            </div>
                            <p>Погрузитесь в мир Майнкрафта с уникальными биомами, звуками мурчания и новыми анимациями, делая ваш опыт игры мягким и уютным!</p>
                            <div>

                            </div>
                            <hr/>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <hr/>
                            <GradientButton text={"Подписаться"}/>
                            <GradientButton text={"Сохранить"}/>
                        </div>
                        </OutlineBlock>
                    </div>
                    <div>
                        <OutlineBlock style={{padding: "1.2rem"}}>
                        <div className={styles.content}>
                            <h1>Сторонние ресурсы</h1>
                            <p>Discord</p><p>GitHub</p>
                            <hr/>
                            <h1>Новые версии</h1><p>Посмотреть все ></p>
                            <div></div>
                            <hr/>
                            <h1>Участники проекта</h1>
                            <div></div>
                            <hr/>
                            <h1>Техническая информация</h1>
                            <div>
                                <p>Лицензия</p>
                                <p>GPL-3.0 license</p>
                            </div>
                            <div>
                                <p>Клиентская часть</p>
                                <p>Необходимо</p>
                            </div>
                            <div>
                                <p>Серверная часть</p>
                                <p>Необходимо</p>
                            </div>
                            <div>
                                <p>ID Проекта</p>
                                <p>FGe23Be</p>
                            </div>
                        </div>
                        </OutlineBlock>
                    </div>
                </div>
                <div className={styles.right_side}>
                    <div className={styles.search_panel}>
                        <OutlineBlock style={{padding: "1.2rem"}}>
                            <div className={styles.search_panel_layout}>
                                <section className={styles.navRows}>
                                    <InitNavBar navList={test_links} activeHighligth={true} activeParam={"page"}/>
                                </section>
                            </div>
                        </OutlineBlock>
                    </div>
                    <div className={styles.addon_content}>
                        <OutlineBlock style={{padding: "1.2rem"}}>
                            <div className={styles.result_block}>
                                {/* <Image src="src" alt="alt" width={} height={} /> */}
                                <h1>🌈 Мир и Биомы:</h1>
                                <p>Откройте для себя новые биомы, такие как "Кошачьи леса" и "Мурландия".</p>
                                <p>Каждый уголок мира наполнен мурчащими и игривыми котиками с уникальными расцветками и характерами.</p>
                                <h1>🔊 Звуки:</h1>
                                <p>Погрузитесь в атмосферу кошачьего царства с специально записанными звуками мурчания, мяуканий и приколов.</p>
                                <h1>🕹️ Анимации:</h1>
                                <p>Улучшенное взаимодействие с котами с новыми анимациями.</p>
                                <p>Наблюдайте, как они поднимаются на задние лапы, танцуют под музыку и прыгают от радости.</p>
                                <h1>🛠️ Новые предметы:</h1>
                                <p>Введены "Кошачьи лакомства" и "Мягкая подушка" для лучшего взаимодействия с котами.</p>
                                <p>Создавайте уютные укрытия и наслаждайтесь новыми возможностями для взаимодействия.</p>
                                <h1>🍬 Приключения:</h1>
                                <p>Подготовьтесь к самому мягкому и веселому приключению в майнкрафтовской вселенной.</p>
                                <p>Catumn - ваш билет в мир уюта, радости и, конечно же, мурлыканья!</p>
                                <h1>🌟 Завершение:</h1>
                                <p>Добро пожаловать в увлекательный мир, где каждый момент наполнен уютом и пушистыми друзьями.</p>
                                <p>Наслаждайтесь каждым мурчащим моментом в этом новом кошачьем путешествии! 🌟🐱💕</p>
                            </div>
                        </OutlineBlock>
                    </div>
              </div>
            </div>
        </>
    )
}