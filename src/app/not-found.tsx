import Link from 'next/link'
import styles from "@/styles/notFound.module.scss";
import Image from 'next/image';
import sadCat from "$/assets/img/random/sad-cat.jpg";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image src={sadCat} alt="sad-cat" width={200} height={200}/>
      <h1>Вот блин, такой страницы не существует :(</h1>
      <Link href="/">Вернуться на главную</Link>
    </div>
  )
}