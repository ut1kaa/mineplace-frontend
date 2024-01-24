import styles from "@/styles/components/label/logo.module.scss"

import LogoSvg from  '$/public/logo.svg'

const Logo = (width: number, height: number) => {
    return (
        <>
            <LogoSvg width={width} height={height} />
        </>
    );
}

const TextLogo = () => {
    return (
        <>
            <div className={styles.textlogo}>
                <LogoSvg width={38} height={38}/>
                <span className={styles.text}>mineplace</span>
            </div >
        </>
    );
}

export {Logo, TextLogo};