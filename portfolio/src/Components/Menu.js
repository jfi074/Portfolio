import styles from '../styles/Menu.module.css';
import Link from 'next/link';
export default function Menu() {
    return <nav className={styles.menu}>
        <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/Projet1">Projet1</Link></li>
            <li><Link href="/Projet2">Projet2</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
        </ul>
    </nav>
}
