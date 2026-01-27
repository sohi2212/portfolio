import { skills } from "../../../../shared/constants"
import { Typewriter } from "../../../../shared/ui"
import styles from '../styles/Intro.module.css'
import { Ava } from "./Ava"

export const Intro = () => {
    return (
        <section className={styles.container}>
            <div>
                <h1>Hi, I am
                    <br />
                    <span className={`${styles.blue} ${styles.my__name}`}>Dmitry,</span>
                </h1>
                <Typewriter text={skills} />
            </div>
            <Ava />
            <p>
                Welcome to my portfolio! My name is Dmitry Popov, and I am an ambitious Frontend Developer with hands-on experience as a Network Engineer at an internet service provider. I learn quickly and enjoy turning ideas into real, functional web applications, combining technical skills and practical experience to deliver high-quality solutions.
            </p>
        </section>
    )
}