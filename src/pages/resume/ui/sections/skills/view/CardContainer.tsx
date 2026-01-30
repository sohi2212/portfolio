import styles from '../styles/CardContainer.module.css'

interface Props {
    children: React.ReactNode
}

export const SkillCardContainer = (props: Props) => {
    return (
        <div className={styles.card__container}>
            {props.children}
        </div>
    )
}