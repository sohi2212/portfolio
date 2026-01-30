import { useOnScreen } from '../../../../../../shared/ui'
import styles from '../styles/contact.module.css'
import { ContactCard } from './ContactCard'

export const ContactSection = () => {
    const { isVisible, ref } = useOnScreen()
    return (
        <section id='contact' ref={ref} className={styles.contact}>
            <div className={`${styles.container} ${isVisible && styles.visible}`}>
                <h3 className="title">Contact</h3>
                <h4>Write to me <span>anytime</span></h4>
                <div className={styles.contact__list}>
                    <ContactCard url='https://github.com/sohi2212' img='/github.png' text='GitHub' />
                    <ContactCard url='https://t.me/Doobinskiq' img='/telegram.svg' text='Telegram' />
                </div>

            </div>
        </section>
    )
}