import Link from "next/link";

import styles from "@/styles/components/ui/navBar.module.scss"


type NavBarProps = {
    navList: { name: string; to: string }[],
    activeHighligth?: boolean,
    activeTab?: number | undefined,
  };
  
const InitNavBar: React.FC<NavBarProps> = ({ navList, activeHighligth = false, activeTab = undefined}) => {
    return (
        <nav className={styles.layout}>
            {navList.map((link => (
                <div className={styles.children}>
                    <Link href={link.to}>{link.name}</Link>
                </div>
            )))}
        </nav>
    );
};

export { InitNavBar };