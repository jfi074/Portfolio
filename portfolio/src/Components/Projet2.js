import Image from 'next/image'
import styles from '../styles/Projet.module.css';

import cal1 from '../public/cal1.png'
import cal2 from '../public/cal2.png'
import cal3 from '../public/cal3.png'
import cal4 from '../public/cal4.png'
import cal5 from '../public/cal5.png'
import cal6 from '../public/cal6.png'
import cal7 from '../public/cal7.png'
import cal8 from '../public/cal8.png'

export default function Calculatrice(){

    return <>
    <section>
        <h2>Ma Calculatrice</h2>    
        <div className={styles.description}>
            <Image src={cal8} alt="srp2" width={500}/>
            <div>
                <p>
                Ma calculatrice est une application conçue pour faire les fonctions d une calculatrice normale.
                <p/>L objectif est de pouvoir créer une calculatrice qui fonctionne 
                c est à dire capable de faire les opérations comme la multiplication la division la soustraction l addiction.
                <p/>Et en plus de ça, on a ajouté d autre fonctionnalité comme le calcul de l inverse d un nombre, 
                le pourcentage et aussi la factorielle 
                
 
                </p>
            </div>
        </div>
        <div className={styles.description}>
            <p> 
                <p/>On a ajouté un bouton d aide, une fois clické sur ce bouton on avait une autre fenêtre 
                qui s ouvrait avec les informations à propos de cette calculatrice
                <p/>La calculatrice avait deux lieux d affichage, il y avait un lieu où on montrer toutes 
                les opérations faites et un autre ou on montrait les résultats.

                <p/>Les boutons n avaient pas les mêmes couleurs, les boutons des nombres étaient plus claires 
                et les boutons pour les opérations étaient plus opaques enfin le bouton d égalité était bleu.
            </p>
            <Image src={cal7} alt="srp3" width={450} height={300} />  
        </div>    
    </section>
    <section>
        <h2>Technologies</h2>
        <ul className={styles.technologie}>
            <li>C#</li>
            <li>C++</li>
            <li>Visual Studio</li>
            <li>Visual Basic.NET</li>
            <li>WPF</li>
        </ul>
    </section>

    <section>
        <h2>Gallerie</h2>
        <div className={styles.gallerie}>
            <Image src={cal1} alt="cal1" width={500}/>
            <Image src={cal2} alt="cal2" width={500}/>
            <Image src={cal3} alt="cal3" width={500}/>
            <Image src={cal4} alt="cal4" width={500}/>
            <Image src={cal5} alt="cal5" width={500}/>
            <Image src={cal6} alt="cal6" width={500}/>
        </div>
    </section>
    </>
        
    
}
