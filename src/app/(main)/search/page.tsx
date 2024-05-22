import styles from "@/styles/(main)/search/page.module.scss";

import { OutlineBlock, OutlineSubBlock } from "@/components/ui/outlineBlocks";
import { Search, Select, CheckBox, MultiSelect } from "@/components/ui/input";
import { OutlineButton, BlockButton } from "@/components/ui/buttons";

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

export default async function Mods() {

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

        const sort_optionPag = [
          {
            name: "10",
            id: "10"
          },
          {
            name: "20",
            id: "20"
          }, 
          {
            name: "30",
            id: "30"
          }, 
          {
            name: "40",
            id: "40"
          }, 
        ]
        
        const selectedOptionPag = 
          {
            name: "10",
            id: "10"
          }

        
        const categories = {
          "Библиотека" : <Lib />,
          "Генерация мира": <WorldGeneration />,
          "Декорации": <Decoration />,
          "Еда":<Food />,
          "Игровые механики":<GamePlay/>,
          "Магия":<Magic />,
          "Менеджмент":<Managment />,
          "Миниигры":<MiniGames />,
          "Мобы":<Mobs />,
          "Оптимизация":<Optimisation />,
          "Приключения":<Adventure />,
          "Проклятия":<Cursed />,
          "Снаряжение": <Equip />,
          "Социальность": <Social />,
          "Технологии": <Tech />,
          "Транспортировка": <Transport />,
          "Утилиты": <Util />,
          "Хранение": <Storage />,
          "Экономика": <Economy />,
        }

        const loaders = {
          "Fabric": <Fabric/>,
          "Forge": <Forge/>,
          "NeoForge": <NeoForge/>,
          "Quilt": <Quilt/>,
          "LiteLoader": <LiteLoader/>,
          "Risugami`s ModLoader": <Risugami/>,
        }

        const env = {
          "Client": <Client />,
          "Server": <Server />,
        }

        const minecraft_versions = [
          {
            name: "1.20.4",
            id: "1.20.4"
          },
          {
            name: "1.20.3",
            id: "1.20.3"
          },
          {
            name: "1.20.2",
            id: "1.20.2"
          },
          {
            name: "1.20.1",
            id: "1.20.1"
          },
          {
            name: "1.20",
            id: "1.20"
          },
          {
            name: "1.19.4",
            id: "1.19.4"
          },
          {
            name: "1.19.3",
            id: "1.19.3"
          },
          {
            name: "1.19.2",
            id: "1.19.2"
          },
          {
            name: "1.19",
            id: "1.19"
          },
          {
            name: "1.18",
            id: "1.18"
          },
          {
            name: "1.17",
            id: "1.17"
          },
          {
            name: "1.16",
            id: "1.16"
          },
          {
            name: "1.15",
            id: "1.15"
          },
          {
            name: "1.14",
            id: "1.14"
          },
          {
            name: "1.13",
            id: "1.13"
          },
          {
            name: "1.12",
            id: "1.12"
          },
          {
            name: "1.11",
            id: "1.11"
          },
          {
            name: "1.10",
            id: "1.10"
          },
          {
            name: "1.9",
            id: "1.9"
          },
          {
            name: "1.8",
            id: "1.8"
          }
        ];
        

    return (
        <>
            <div className={styles.search_block}>
              <div className={styles.search_settings}>
                <OutlineBlock style={{padding: "1.2rem"}}>
                  <div className={styles.settings_content}>
                    <div className={styles.DeleteFiltersButtonComponent}>
                      <BlockButton>
                        <ClearLogo/>
                        Удалить фильтры
                      </BlockButton>
                    </div>
                    <section>
                      <h2>Категории</h2>
                      {Object.entries(categories).map(([key, value]) => (
                        <div className={styles.catigory} key={key} >
                          <CheckBox/> <div>{value}</div><p>{key}</p>
                        </div>
                      ))}
                    </section>
                    <section>
                      <h2>Лоадеры</h2>
                      {Object.entries(loaders).map(([key, value]) => (
                        <div className={styles.catigory} key={key} >
                          <CheckBox/> <div>{value}</div><p>{key}</p>
                        </div>
                      ))}
                    </section>
                    <section>
                      <h2>Окружение</h2>
                      {Object.entries(env).map(([key, value]) => (
                        <div className={styles.catigory} key={key} >
                          <CheckBox/> <div>{value}</div><p>{key}</p>
                        </div>
                      ))}
                    </section>
                    <section>
                      <h2>Версия Minecraft</h2>
                      <div className={styles.catigory} key="version">
                        <CheckBox/> <p>Показать все версии</p>
                      </div>
                      <MultiSelect info={{label: "Выберите версию...", name: "version"}} options={minecraft_versions}/>
                    </section>
                    <section>
                      <h2>Открытый исходный код</h2>
                      <div className={styles.catigory} key="open_source">
                        <CheckBox/> <p>Только открытый исходный код</p>
                      </div>
                    </section>
                  </div>
                </OutlineBlock>
              </div>
              <div className={styles.search}>
                <div className={styles.search_panel}>
                  <OutlineBlock style={{padding: "1.2rem"}}>
                      <div className={styles.search_panel_layout}>
                          <div className={styles.SearchComponent}>
                            <Search/>
                          </div>
                          <p>Сортировать по</p>
                          <div className={styles.SortComponent}>
                            <Select  info={{label: "Сортировка", name: "sort"}} options={sort_option} standartSelectedOption={selectedOption}/>
                          </div>
                          <p>Показать на странице</p>
                          <div className={styles.PaginationCountComponent}>
                            <Select  info={{label: "Сортировка", name: "sort"}} options={sort_optionPag} standartSelectedOption={selectedOptionPag}/>
                          </div>
                          <div className={styles.RemapButtonComponent}>
                            <BlockButton>
                              <RemapLogo/>
                            </BlockButton>
                          </div>
                      </div>
                  </OutlineBlock>
                </div>
                <div className={styles.pagination}>PAGINATION</div>
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