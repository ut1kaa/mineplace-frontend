import styles from "@/styles/components/label/logo.module.scss"

import LogoSvg from  '$/public/logo.svg'
import Link from "next/link";

const Logo = () => {
    return (
        <>
            <LogoSvg width={"100%"} height={"100%"} />
        </>
    );
}

const TextLogo = () => {
    return (
        <>
            <Link href={"/"}>
                <div className={styles.textlogo}>
                    <div className={styles.icon}>
                        <Logo />
                    </div>
                    <span className={styles.text}>mineplace</span>
                </div >
            </Link>
        </>
    );
}

export {Logo, TextLogo};