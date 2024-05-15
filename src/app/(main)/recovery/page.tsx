import { CustomInput } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/buttons";
import { OutlineBlock } from "@/components/ui/outlineBlocks";
import styles from "@/styles/(main)/singUp/page.module.scss";
import Email from "$/assets/icons/email.svg"
import Link from "next/link";



export default async function Recovery() {
    return (
        <>
            <div className={styles.main_block}>
                <OutlineBlock>
                    <div className={styles.inner}>
                        <h1>Восстановите пароль</h1>
                        <p>Введите свою почту нижу и мы отправим на неё ссылку для восстановления доступа к вашему аккаунту.</p>
                        <CustomInput icon={<Email/>} inputType="email" inputName="email" placeHolder="Почта"/>
                        <div className={styles.bottom_part}>
                            <GradientButton text="Отправить"/>
                        </div>
                    </div>
                </OutlineBlock>
            </div>
        </>
    )
}