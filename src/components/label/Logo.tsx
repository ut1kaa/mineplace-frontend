import styles from "@/styles/components/label/logo.module.scss"

import LogoSvg from  '$/public/logo.svg'
import Link from "next/link";

const Logo = ({size={width:"100%", height: "100%"}, link=true}) => {
    return (
        <> { link ? 
            (<Link href={"/"}>
                <LogoSvg width={size.width} height={size.height} />
            </Link>) : (
                 <LogoSvg width={size.width} height={size.height} />
            )
        }
        </>
    );
}

const TextLogo = () => {
    return (
        <>
            <Link href={"/"}>
                <div className={styles.textlogo}>
                    <div className={styles.icon}>
                        <Logo link={false} />
                    </div>
                    <span className={styles.text}>mineplace</span>
                </div >
            </Link>
        </>
    );
}

export {Logo, TextLogo};