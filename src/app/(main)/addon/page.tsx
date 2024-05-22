import styles from "@/styles/(main)/addon/page.module.scss";

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
import { InitNavBar } from "@/components/ui/navBar";

export default async function Addon() {

    const test_links = [
        {
          name: "Описание",
          to: "/addon?page=discription",
          page_name: "discription",
        },
        {
          name: "Галерея",
          to: "/addon?page=gallery",
          page_name: "gallery",
        },
        {
          name: "История изменений",
          to: "/addon?page=changelog",
          page_name: "changelog",
        },
        {
          name: "Версии",
          to: "/addon?page=versions",
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
                            123
                        </div>
                        </OutlineBlock>
                    </div>
                    <div>
                        <OutlineBlock style={{padding: "1.2rem"}}>
                        <div className={styles.content}>
                            123
                        </div>
                        </OutlineBlock>
                    </div>
                </div>
                <div className={styles.right_side}>
                    <div className={styles.search_panel}>
                        <OutlineBlock style={{padding: "1.2rem"}}>
                            <div className={styles.search_panel_layout}>
                                <section className={styles.navRows}>
                                    <InitNavBar navList={test_links} activeHighligth={true}/>
                                </section>
                            </div>
                        </OutlineBlock>
                    </div>
                    <div className={styles.addon_content}>
                        <OutlineBlock style={{padding: "1.2rem"}}>
                            <div className={styles.result_block}>
                                123
                            </div>
                        </OutlineBlock>
                    </div>
              </div>
            </div>
        </>
    )
}