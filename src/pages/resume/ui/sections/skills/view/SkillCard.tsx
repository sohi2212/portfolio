import { Icon } from "../../../../../../shared/ui"
import styles from "../styles/SkillCard.module.css"

interface Props {
    src: string
    name: string
}

export const SkillCard = (props: Props) => {
    return (
        <div className={styles.skill__card}>
            <Icon height="60px" width="60px" src={props.src} />
            <span className={styles.card__text}>{props.name}</span>
        </div>
    )
}