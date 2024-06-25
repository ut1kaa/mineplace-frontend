import styles from "@/styles/(main)/user/page.module.scss";

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
import userPic from "$/assets/img/cards/card/user-pic.png";
import profilePic from "$/assets/img/cards/card/icon.png";
import Link from "next/link";

import Heart from '$/assets/icons/heart.svg';
import Update from '$/assets/icons/update.svg';
import Download from '$/assets/icons/download.svg';
import { InitNavBar } from "@/components/ui/navBar";

export default async function Addon() {

    const test_links = [
        {
          name: "Все",
          to: "/user?page=all",
          page_name: "all",
        },
        {
          name: "Моды",
          to: "/user?page=mods",
          page_name: "mods",
        },
        {
          name: "Плагины",
          to: "/user?page=plugins",
          page_name: "plugins",
        },
        {
            name: "Датапаки",
            to: "/user?page=datapacks",
            page_name: "datapacks",
        },
        {
            name: "Шейдеры",
            to: "/user?page=shaders",
            page_name: "shaders",
        },
        {
            name: "Ресурспаки",
            to: "/user?page=resoursepacks",
            page_name: "resoursepacks",
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
                                <Image src={userPic} alt="userpic" width={100} height={100} />
                                <div>
                                <h1>catuser123</h1>
                                <p>Создатель</p>
                                </div>
                            </div>
                            <p>Кот-хакер который пишет моды для майнкрафта про котов.</p>
                            <hr/>
                            <p>1.34 М скачиваний</p>
                            <p>3,353 подписок на проекты</p>
                            <p>Зарегистрировался 1 месяц назад</p>
                            <hr/>
                            <div>
                                <p>ID пользователя</p> <p>FGe23Be</p>
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
                    <div className={styles.search_result}>
                  <div className={styles.result}>
                    <OutlineBlock style={{padding: "0"}}>
                        <div className={styles.result_block}>
                          <Image className={styles.background}src={backCard} alt="back" width={160} height={60} />
                          <div className={styles.name}>
                            <Image src={profilePic} alt="profilepic" width={100} height={100} />
                            <div>
                              <h1>Catumn</h1>
                              <p>от <Link href=""><u>catuser123</u></Link></p>
                            </div>
                          </div>
                          <div className={styles.info}>
                            <p>Погрузитесь в мир Майнкрафта с уникальными биомами, звуками мурчания и новыми...</p>
                            <div className={styles.settings}> 
                              <div><div className={styles.Icon}><WorldGeneration /></div><b>Клиент или сервер</b></div>
                              <div><div className={styles.Icon}><Mobs /></div>Мобы</div>
                              <div><div className={styles.Icon}><Fabric /></div>Fabric</div>
                            </div>
                          </div>
                          <div className={styles.stat}>
                            <div className={styles.left}>
                              <div>
                                <div className={styles.Icon}><Download/></div><b>1.34М</b>
                              </div>
                              <div>
                                <div className={styles.Icon}><Heart/></div><b>3,353</b>
                              </div>
                            </div>
                            <div className={styles.right}>
                              <div className={styles.Icon}><Update/></div><p>Обновлено вчера</p>
                            </div>
                          </div>
                        </div>
                    </OutlineBlock>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}