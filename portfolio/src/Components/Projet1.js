import Image  from 'next/image';
import styles from '../styles/Projet.module.css';

import drp1 from '../public/drp1.png'
import drp2 from '../public/drp2.png'
import drp3 from '../public/drp3.png'
import drp4 from '../public/drp4.png'
import drp5 from '../public/drp5.png'
import drp6 from '../public/drp6.png'
import drp7 from '../public/drp7.png'


export default function Projet1() {
    return <main>
        <section>
            <h2>Jeux du drapeau</h2>    
            <div className={styles.description}>
                <Image src={drp7} alt="drp7" width={500}/>
                <p>
                    <p/>Le jeux du drapeau est un jeux concus comme une application mobile android, 
                    <p/>ce jeux consiste a la devinette du drapeau par le nom avec 
                        plusieurs drapeaux parmis lesquels il faut choisir 1 correspondant au nom donnee.

                    <p/>Il faux savoir qu on a seulement 5 tentatives de choix,
                    <p/>Si on depasse les 5 tentatives on ne peut plus faire d autres choix et l ecran reste rouge.
                                     
                </p>
            </div>

            <div className={styles.description}>
                <p> 
                Si on veut recommencer le jeu il y a un bouton appeler Recommencer en haut a droit pour réinitialiser le jeux.
                <p/>Il y a aussi un endroit où on comptabilise les tentatives pour savoir combien on en a déjà fait.
                <p/>Et à chaque fois qu on fait une tentative il y a une petite notification en bas qui viens et qui montre 
                    le nombre de tentative qu on a déjà fais et qui disparait après 2 secondes.
                
                <p/>Avant de faire la 1ere tentative le background a une couleur grise et chaque fois qu on fait une erreur 
                        le background change de couleur en rouge mais si on trouve le drapeau correspondant le background change 
                        de couleur et devient bleu.

                </p>
      
            </div>    
        </section>

        <section>
            <h2>Technologies</h2>
            <ul className={styles.technologie}>
                <li>AndroidStudio</li>
                <li>JAVA</li>
                <li>JSON</li>
                <li>Kotlin</li>
            </ul>
        </section>

        <section>
            <h2>Gallerie</h2>
            <div className={styles.gallerie}>
            <Image src={drp1} alt="drp1" width={500} />
            <Image src={drp2} alt="drp2" width={500} />
            <Image src={drp3} alt="drp3" width={500}/>
            <Image src={drp4} alt="drp4" width={500}/>
            <Image src={drp5} alt="drp5" width={500} />
            <Image src={drp6} alt="drp6" width={500} />
            </div>
        </section>
    </main>
}
