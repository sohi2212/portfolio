import { ICON_MAP } from '../../../../../../shared/config'
import type { TimelineItem } from '../../../../../../shared/models'
import { Icon } from '../../../../../../shared/ui'
import styles from '../styles/Timeline.module.css'

export const Timeline = (props: TimelineItem) => {
    return (
        <div className={styles.timeline__card}>
            <h4 className={styles.timeline__date}><Icon height='15px' width='15px' src='/calendar.svg' />{props.date}</h4>
            <h5 className={styles.timeline__title}><Icon height='25px' width='25px' src={ICON_MAP[props.type]} />{props.title}</h5>
            <h4 className={styles.timeline__subtitle}><Icon height='29px' width='20px' src='/building.svg' />{props.subtitle}</h4>
            <p className={styles.timeline__description}>{props.description}</p>
        </div>
    )
}