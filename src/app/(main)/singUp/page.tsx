import { CustomInput, CheckBox } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/buttons";
import { OutlineBlock } from "@/components/ui/outlineBlocks";
import styles from "@/styles/(main)/singUp/page.module.scss";
import Email from "$/assets/icons/email.svg"
import User from "$/assets/icons/user.svg"
import Password from "$/assets/icons/key.svg"
import Link from "next/link";



export default async function singUp() {
    return (
        <>
            <div className={styles.main_block}>
                <OutlineBlock>
                    <div className={styles.inner}>
                        <h1>Создайте аккаунт</h1>
                        <CustomInput icon={<Email/>} inputType="email" inputName="email" placeHolder="Почта"/>
                        <CustomInput icon={<User/>} inputType="text" inputName="login" placeHolder="Логин"/>
                        <CustomInput icon={<Password/>} inputType="password" inputName="password" placeHolder="Пароль"/>
                        <CustomInput icon={<Password/>} inputType="password" inputName="password" placeHolder="Повторите пароля"/>
                        
                        <CheckBox label={"Подписаться на обновления Mineplace"}/>
                        <p>Создавая аккаунт, вы соглашаетесть с <a>условиями</a> и <a>полтикой конфиденциальности</a> Mineplace.</p>
                        <div className={styles.bottom_part}>
                            <GradientButton text="Создать"/>
                            <p>Уже есть аккаунт? <Link href={"/singIn"}>Войти</Link></p>
                        </div>
                    </div>
                </OutlineBlock>
            </div>
        </>
    )
}