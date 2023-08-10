import { useForm } from "react-hook-form"
import styles from "../styles/Contact.module.css"

export default function Form() {
    const{register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return <form className={styles.Contact} noValidate onSubmit={handleSubmit(onSubmit)}>
       
        <section>
            <h2>Contactez-moi</h2>
            <div className={styles.element}>
                <label > 
                    Nom et prenom
                    <input type="Text" {...register('nom')} placeholder="jean fidele"/>
                </label>
            </div>
            <div className={styles.element}>
                <label>
                    Entreprise
                    <input type="Text" {...register('Entreprise')} placeholder="College la cite"/>
                </label>
            </div>
            <div className={styles.element}>
                <label>
                    EMail
                    <input 
                        type="email" 
                        {...register('courriel', 
                        {required: 'Veuiller entrer une adresse courriel', 
                        pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                        message: 'adresse Courriel est invalide'}})} 
                        placeholder="jeanfidele@gmail.com " />
                </label>
                {errors.courriel  &&
                    <div className={styles.erreur}>
                        {errors.courriel.message}
                    </div>
                }
            </div>
            <div className={styles.element}>
                <label>
                    Mot de passe
                    <input 
                        type="password" 
                        {...register('motpasse', {
                            required: 'Veuiller entrer un mot de passe',
                            minLength: { value: 8, message: 'Le mot de passe doit contenir au moin 8 caractere'} 
                        })} 
                        placeholder="je@nFid1"/>
                </label>
                {errors.motpasse &&
                    <div className={styles.erreur}>
                        {errors.motpasse.message}
                    </div>
                }
            </div>

            <input type="submit" value="Envoyer"/>

        </section>
        
    </form>
}
