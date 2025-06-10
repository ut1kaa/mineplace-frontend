"use client"

import { CustomInput } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/buttons";
import { OutlineBlock } from "@/components/ui/outlineBlocks";
import styles from "@/styles/(main)/singUp/page.module.scss";
import Email from "$/assets/icons/email.svg"
import Password from "$/assets/icons/key.svg"
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isTokenValid } from "../../utils/token";

interface IAuthForm {
    email: string;
    password: string;
  }

export default function singIn() {
    const router = useRouter();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (isTokenValid(token)) {
        
            router.push("/");
        }
    }, [token, router]); 
    const [formData, setFormData] = useState<IAuthForm>({
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
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Ошибка аторизации");
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);
            window.location.href = "/"; 
        } catch (error: any) {
            console.log(error.message)
            setError(error.message);
        }
    };


    return (
        <>
            <div className={styles.main_block}>
                <OutlineBlock>
                    <form className={styles.inner} onSubmit={handleSubmit}>
                        <h1>Войдите</h1>
                        <CustomInput icon={<Email/>} inputType="email" inputName="email" placeHolder="Почта или логин" standartValue={formData.email} onChange={handleChange} />

                        <CustomInput icon={<Password/>} inputType="password" inputName="password" placeHolder="Пароль" standartValue={formData.password} onChange={handleChange} />
                        <div className={styles.bottom_part}>
                            <GradientButton text="Войти"/>
                            <p><Link href={"/recovery"}>Забыли пароль?</Link> ● <Link href={"/singUp"}>Создать аккаунт</Link> </p>
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </form>
                </OutlineBlock>
            </div>
        </>
    )
}