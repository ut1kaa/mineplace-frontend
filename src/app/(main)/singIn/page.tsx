import { CustomInput } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/buttons";
import { OutlineBlock } from "@/components/ui/outlineBlocks";
import styles from "@/styles/(main)/singUp/page.module.scss";
import Email from "$/assets/icons/email.svg"
import Password from "$/assets/icons/key.svg"
import Link from "next/link";



export default async function singIn() {
    return (
        <>
            <div className={styles.main_block}>
                <OutlineBlock>
                    <div className={styles.inner}>
                        <h1>Войдите</h1>
                        <CustomInput icon={<Email/>} inputType="email" inputName="email" placeHolder="Почта или логин"/>

                        <CustomInput icon={<Password/>} inputType="password" inputName="password" placeHolder="Пароль"/>
                        <div className={styles.bottom_part}>
                            <GradientButton text="Войти"/>
                            <p><Link href={"/recovery"}>Забыли пароль?</Link> ● <Link href={"/singUp"}>Создать аккаунт</Link> </p>
                        </div>
                    </div>
                </OutlineBlock>
            </div>
        </>
    )
}