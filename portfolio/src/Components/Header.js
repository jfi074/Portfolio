import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";

import logo from '../public/logo.png'

import styles from '../styles/Header.module.css';

export default function Header() {
    return <header className={styles.header}>
        <div className="wrapper">
        <Link href="/">
                <Image src={logo} alt="Logo"  width={120} height={150}  />
            </Link>
            <div>
                <h1>Portfolio de Jean fidele</h1>
            </div>
           
            <Menu />
        </div>
    </header>
}
