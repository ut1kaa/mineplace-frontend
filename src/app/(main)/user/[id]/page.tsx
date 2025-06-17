"use client"
import styles from "@/styles/(main)/user/page.module.scss";
import styles_search from "@/styles/(main)/search/page.module.scss";

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
import { useEffect, useState } from "react";
import { isTokenValid } from "../../../utils/token";
import { notFound } from 'next/navigation';

interface AddOn {
    uuid: string;
    user_uuid: string;
    username: string;
    name: string;
    type: string;
    short_description: string;
    description: string;
    downloads: number;
    publish_date: string; 
    update_date: string; 
    likes_count: number;
}

const formatNumber = (num: number): string => {
    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(2) + 'М';
    }
    if (num >= 1_000) {
        return (num / 1_000).toFixed(2) + 'К';
    }
    return num.toLocaleString();
};

const formatRelativeDate = (dateString: string): string => {
    const now = new Date();
    const updateDate = new Date(dateString);
    const diffTime = Math.abs(now.getTime() - updateDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Обновлено сегодня';
    if (diffDays === 1) return 'Обновлено вчера';
    if (diffDays <= 7) return `Обновлено ${diffDays} дн. назад`;
    return `Обновлено ${updateDate.toLocaleDateString('ru-RU')}`;
};

export default function Addon() {
    const [user, setUser] = useState<{ uuid: string; username: string; email: string; paasword_hash: string; profile_picture?: string; created_at: string} | null>(null);
    const [loadingUser, setLoadingUser] = useState(true);
    const [addons, setAddons] = useState<AddOn[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const fetchUserData = async () => {
      setLoadingUser(true);
      const token = localStorage.getItem("token");

      if (!isTokenValid(token)) {
        setUser(null);
        setLoadingUser(false);
        return;
      }

      try {
        const response = await fetch("/api/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          const errorData = await response.json();
          console.error("Ошибка при получении данных пользователя:", errorData.error);
          setUser(null);
        }
      } catch (error) {
        console.error("Сетевая ошибка:", error);
        setUser(null);
      } finally {
        setLoadingUser(false); 
      }
    };
  
    useEffect(() => {
      fetchUserData();
    }, []); 

    useEffect(() => {
      if (!loadingUser && user === null) {
        notFound();
      }
    }, [user, loadingUser]);

    const fetchAddons = async (id: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/user/get_addons/${id}`, {
                method: "GET",
            });
            const data = await response.json();
            if (response.ok) {
                
                setAddons(data.items);
            } else {
                setAddons([]);
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
            setAddons([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
      if (user) {
        fetchAddons(user.uuid);
      } 
    }, [user]);

    const loadingMessage = loading && <div className={styles.loading_indicator}>Загрузка аддонов...</div>;
    const errorMessage = error && <div className={styles.error_message}>Ошибка: {error}</div>;
    const noResultsMessage = !loading && !error && addons.length === 0 && (
        <div className={styles.no_results}>Аддоны не найдены.</div>
    );

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
                                <h1>{user?.username}</h1>
                                <p>Создатель</p>
                                </div>
                            </div>
                            {/* <p>Кот-хакер который пишет моды для майнкрафта про котов.</p> */}
                            <hr/>
                            <p>1.34 М скачиваний</p>
                            <p>3,353 подписок на проекты</p>
                            <p>Зарегистрирован: <br/>{user?.created_at && new Date(user.created_at).toLocaleString("ru-RU", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit"
                            })}</p>
                            <hr/>
                            <GradientButton text={"Добавить домен"} redirectTo="/new_addon"/>
                            <div>
                                <p>ID пользователя</p> <p>{user?.uuid}</p>
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
                  {loadingMessage}
                  {errorMessage}
                  {noResultsMessage}
                  <div className={styles.result}>
                    {addons.map((addon) => ( 
                    <OutlineBlock style={{ padding: "0" }} key={addon.uuid}>
                        <Link className={styles.result_block} href={`/add-on/${addon.uuid}?page=discription`}>
                            <Image
                                className={styles.background}
                                src={backCard}
                                alt={addon.name}
                                width={160}
                                height={60}
                            />
                            <div className={styles.name}>
                                <Image
                                    src={profilePic}
                                    alt={`Профиль ${addon.user_uuid}`}
                                    width={100}
                                    height={100}
                                />
                                <div>
                                    <h1>{addon.name}</h1>
                                    <p>
                                        от <Link href={`/user/${addon.user_uuid}`}>
                                            <u>{addon.username}</u>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <p className={styles.short_description_text}>{addon.short_description}</p>
                                <div className={styles.settings}>
                                    {addon.type === 'map' && (
                                        <div><div className={styles.Icon}><WorldGeneration /></div><b>Карта</b></div>
                                    )}
                                    {addon.type === 'model' && (
                                        <div><div className={styles.Icon}><Mobs /></div><b>Модель</b></div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.left}>
                                    <div>
                                        <div className={styles.Icon}><Download /></div>
                                        <b>{formatNumber(addon.downloads)}</b>
                                    </div>
                                    <div>
                                        <div className={styles.Icon}><Heart /></div>
                                        <b>{addon.likes_count.toLocaleString()}</b>
                                    </div>
                                </div>
                                <div className={styles.right}>
                                    <div className={styles.Icon}><Update /></div>
                                    <p>{formatRelativeDate(addon.update_date)}</p>
                                </div>
                            </div>
                        </Link>
                    </OutlineBlock>
                ))} 
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}