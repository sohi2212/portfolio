import { Timeline } from './Timeline'
import styles from '../styles/Life.module.css'
import { LifeTimeline } from '../constant/LifeTimeline'
import { useOnScreen } from '../../../../../../shared/ui'

export const LifeSection = () => {
    const { isVisible, ref } = useOnScreen()
    return (
        <section id='life' ref={ref} className={styles.life__path}>
            <h3 className='title'>Life Path</h3>
            <div className={`${styles.container} ${isVisible ? 'visible' : ''}`}>
                <ul>
                    {
                        LifeTimeline.map((i, idx) => (
                            <li key={idx}>
                                <Timeline date={i.date} description={i.description} subtitle={i.subtitle} title={i.title} type={i.type} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}