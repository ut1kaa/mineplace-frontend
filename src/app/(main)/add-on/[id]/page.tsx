"use client"
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

import { use, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

interface AddOnPageProps {
  params: { id: string };
}

interface AddOn {
    uuid: string;
    user_uuid: string;
    username: string; // username пользователя, опубликовавшего аддон
    name: string;
    type: string; // AddOnType
    short_description: string;
    description: string;
    downloads: number;
    publish_date: string; // ISO 8601 string
    update_date: string; // ISO 8601 string
    likes_count: number;
}

export default function Addon({ params }: AddOnPageProps) {
    const [addon, setAddon] = useState<AddOn | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const { id } = params;

    const fetchAddon = async (id: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/addons/get_addon/${id}`, {
                method: "GET",
            });
            const data = await response.json();
            if (response.ok) {
                
                setAddon(data);
            } else {
                setAddon(null);
                setError(data.error);
            }
            
        } catch (err: any) {
            console.error('Ошибка при загрузке аддонов:', err);
            if (err.response.data && typeof err.response.data === 'object') {
                if (err.response.data.detail) {
                    setError(err.response.data.detail);
                } else if (err.response.data.error && typeof err.response.data.error === 'string') {
                    setError(err.response.data.error);
                } else if (err.response.data.msg) { 
                    setError(err.response.data.msg);
                }
                else {
                    setError(JSON.stringify(err.response.data, null, 2));
                }
            } else if (typeof err.response.data === 'string') {
                setError(err.response.data);
            } else {
                setError(err.message || 'Неизвестная ошибка при загрузке аддонов от сервера.');
            }
            setAddon(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAddon(id);
    }, [id]);

    useEffect(() => {
        if (!loading && addon === null) {
            notFound();
        }
    }, [loading, addon]);

    const loadingMessage = loading && <div className={styles.loading_indicator}>Загрузка аддонов...</div>;
    const errorMessage = error && <div className={styles.error_message}>Ошибка: {error}</div>;
    const noResultsMessage = !loading && !error && !addon && (
        <div className={styles.no_results}>Аддоны не найдены.</div>
    );
    

    const test_links = [
        {
          name: "Описание",
          to: `/add-on/${id}?page=discription`,
          page_name: "discription",
        },
        {
          name: "Галерея",
          to: `/add-on/${id}?page=gallery`,
          page_name: "gallery",
        },
        {
          name: "История изменений",
          to: `/add-on/${id}?page=changelog`,
          page_name: "changelog",
        },
        {
          name: "Версии",
          to: `/add-on/${id}?page=versions`,
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
                            {loadingMessage}
                            {errorMessage}
                            {noResultsMessage}
                            {addon ? (
                            <>
                            <div className={styles.name}>
                                <Image src={profilePic} alt="profilepic" width={100} height={100} />
                                <div>
                                <h1>{addon.name}</h1>
                                <p>от <Link href={`/user/${addon.user_uuid}`}><u>{addon.username}</u></Link></p>
                                </div>
                            </div>
                            <p>{addon.short_description}</p>
                            <div>

                            </div>
                            <hr/>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <hr/>
                            {/* <GradientButton text={"Подписаться"}/> */}
                            <GradientButton text={"Сохранить"}/>
                            </>
                            ) : null}

                        </div>
                        </OutlineBlock>
                    </div>
                    <div>
                        <OutlineBlock style={{padding: "1.2rem"}}>
                        <div className={styles.content}>
                            {loadingMessage}
                            {errorMessage}
                            {noResultsMessage}
                            {addon ? (
                                <>
                                    <h1>Сторонние ресурсы</h1>
                                    <p>Discord</p><p>GitHub</p>
                                    <hr/>
                                    <h1>Новые версии</h1><Link href={`/add-on/${id}?page=versions`}>Посмотреть все ></Link>
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
                                        <p>{addon.uuid}</p>
                                    </div>
                                </>
                            ) : null}
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
                                {loadingMessage}
                                {errorMessage}
                                {noResultsMessage}
                                { addon ? (
                                    <>
                                        {addon.description}
                                    </>
                                ) : null }
                                {/* <Image src="src" alt="alt" width={} height={} /> */}

                            </div>
                        </OutlineBlock>
                    </div>
              </div>
            </div>
        </>
    )
}