
import styles from '../styles/Menu.module.css'
function Menu({setPage}) {
    return <nav className={styles.element}>
        <ul className={styles.element}>
        <li className={styles.li}>
                <a href="#" onClick={() =>setPage('Home')}>Accueil</a></li>
            
                <li className={styles.li}>
            <a href="#" onClick={() => setPage('Apropos')}> À propos</a>
               
            </li>
            <li className={styles.li}>
            <a href="#" onClick={() => setPage('Projet')}> Projet</a>
               
            </li>
        </ul>
    </nav>
}