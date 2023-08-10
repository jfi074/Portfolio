import Image from 'next/image'
import styles from '../styles/Accueil.module.css'

import me from '../public/me.png'
import imgCercle from '../public/imgCercle.png'
export default function Accueil() {
    return <main className="wrapper">
        

        <section className={styles.presentation}>
            
            <Image src={me} alt="Me" width={300} height={450}/>
        
            <div>
                <h2>Bonjour, je suis Jean fidele</h2>
                <p>
                Jean fidele Nee en 1998 au Burundi en Afrique de l Est est un étudiant actuel a la cite Vivant en Ontario,
                 il est passionné par l informatique.
                </p>
                <p>Il est actuellement en sa 4eme session dans le programme de programmation informatique dans la faculte 
                    de technique du genie informatique Campus Ottawa Il veut faire carrière en CyberSécurité et a déjà 
                    commence à se renseigne en rapport avec le domaine.
                </p>
                <p>
                Il pratique la natation comme sport et aime participer à des évènements de leadership pour 
                développer son sens de travailler en équipe.
                </p>
            </div>
        </section>
        
        <section className={styles.presentation + ' ' +  styles.inverse}>
            <circle >            
                <Image src={imgCercle} alt="imgCercle" width={400} height={370}  />
            </circle>
            <div>
                <h3>Mes qualités</h3>
                <ul>
                    <li>Bilingue</li>
                    <li>Organisation</li>
                    <li>Travaille d equipe</li>
                    <li>Professionnalisme</li>
                    <li>L attention au details</li>
                    <li>Flexibilite</li>
                </ul>
            </div>
        </section>
    </main>
}
