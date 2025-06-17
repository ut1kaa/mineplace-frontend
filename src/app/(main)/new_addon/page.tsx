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

interface INewAddonForm {
    name: string;
    short_description: string;
    description: string;
  }

export default function NewAddon() {
    const router = useRouter();
    const token = localStorage.getItem("token");

    const [formData, setFormData] = useState<INewAddonForm>({
        name: '',
        type: "mod",
        short_description: '',
        description: '',
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
            const response = await fetch("/api/addons/create_addon", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Ошибка создания аддона");
            }

            const data = await response.json();
            window.location.href = `/add-on/${data.uuid}`; 
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
                        <h1>Создать аддон</h1>
                        <CustomInput icon={<Email/>} inputType="text" inputName="name" placeHolder="Название" standartValue={formData.name} onChange={handleChange} />

                        <CustomInput icon={<Password/>} inputType="text" inputName="short_description" placeHolder="Короткое описание" standartValue={formData.short_description} onChange={handleChange} />
                        <CustomInput icon={<Password/>} inputType="text" inputName="description" placeHolder="Описание" standartValue={formData.description} onChange={handleChange} />
                        
                        <div className={styles.bottom_part}>
                            <GradientButton text="Создать"/>
                        </div>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </form>
                </OutlineBlock>
            </div>
        </>
    )
}