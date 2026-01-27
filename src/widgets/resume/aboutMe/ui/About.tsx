import styles from "../styles/About.module.css"
import { useOnScreen } from "../../../../shared/ui/animation/useOnScreen"
import { InfoItem } from "./InfoItem"
import { items, title } from "../constant/item"

export const AboutMe = () => {
    const { isVisible, ref } = useOnScreen()

    return (
        <section ref={ref} className={styles.about}>
            <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
                <h3 className="title">About me</h3>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        {
                            items.map((i, idx) => (
                                <InfoItem icon={i.icon} parts={i.parts} key={idx} />
                            ))
                        }
                    </div>
                    <div className={styles.right}>
                        <InfoItem parts={title.parts} />
                        <p>I am a frontend developer with strong critical thinking skills and close attention to detail. I design and build scalable, user-friendly interfaces, break down complex tasks into manageable components, and deliver efficient solutions with a focus on UX and performance.
                        </p>
                        <p>I work with a modern frontend stack including HTML, CSS, JavaScript, TypeScript, React, and Next.js. I have experience integrating frontend applications with backend APIs, implementing responsive layouts, and maintaining existing projects. I communicate effectively with both teams and clients, turning requirements into reliable and high-quality interface solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}