"use client"

import { CustomInput, CheckBox } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/buttons";
import { OutlineBlock } from "@/components/ui/outlineBlocks";
import styles from "@/styles/(main)/singUp/page.module.scss";
import Email from "$/assets/icons/email.svg"
import User from "$/assets/icons/user.svg"
import Password from "$/assets/icons/key.svg"
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isTokenValid } from "../../utils/token";


interface IRegisterForm {
    username: string;
    email: string;
    password: string;
  }

export default function singUp() {
    const router = useRouter();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (isTokenValid(token)) {
        
            router.push("/");
        }
    }, [token, router]); 

    const [formData, setFormData] = useState<IRegisterForm>({
        username: '',
        email: '',
        password: '',
      });
      

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [error, setError] = useState<string | null>(null);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Ошибка регистрации");
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);
            window.location.href = "/"; 
        } catch (error: any) {
            setError(error.message);
        }
    };
    


    return (
        <>
            <div className={styles.main_block}>
                <OutlineBlock>
                    <form  className={styles.inner} onSubmit={handleSubmit}>
                        <h1>Создайте аккаунт</h1>
                        <CustomInput icon={<Email/>} inputType="email" inputName="email" placeHolder="Почта" standartValue={formData.email} onChange={handleChange} />
                        <CustomInput icon={<User/>} inputType="text" inputName="username" placeHolder="Логин" standartValue={formData.username} onChange={handleChange}/>
                        <CustomInput icon={<Password/>} inputType="password" inputName="password" placeHolder="Пароль" standartValue={formData.password} onChange={handleChange}/>
                        <CustomInput icon={<Password/>} inputType="password" inputName="password" placeHolder="Повторите пароля"/>
                        
                        <CheckBox label={"Подписаться на обновления Mineplace"}/>
                        <p>Создавая аккаунт, вы соглашаетесть с <a>условиями</a> и <a>полтикой конфиденциальности</a> Mineplace.</p>
                        <div className={styles.bottom_part}>
                            <GradientButton text="Создать"/>
                            <p>Уже есть аккаунт? <Link href={"/singIn"}>Войти</Link></p>
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </form>
                </OutlineBlock>
            </div>
        </>
    )
}