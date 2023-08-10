import styles from '../styles/Footer.module.css';
import Image from 'next/image'

import Facebook_icon from '../public/Facebook_icon.png'
import IG from '../public/IG.png'
import mail from '../public/mail.png'

export default function Footer() {
    return <footer className={styles.footer}>
    <nav>    
        <div className="wrapper">
            &copy; Copyright Jean fidele
        </div>

        <div className="wrapper">
            <a href="https://www.facebook.com/jeanfidel.ngenderukuri/" >
                 <Image src={Facebook_icon} alt="facebook" width={30} height={30} />
            </a>
        </div>
        <div className="wrapper">
        <a href="https://www.instagram.com/jeanfidele_257/" >
                 <Image src={IG} alt="IG" width={30} height={30} />
            </a>
        </div>
        <div className="wrapper">
        <a href="mailto:ngenderukuri@gmail.com" >
                 <Image src={mail} alt="mail" width={30} height={30} />
            </a>
        </div>
    </nav>    
    </footer>
}



