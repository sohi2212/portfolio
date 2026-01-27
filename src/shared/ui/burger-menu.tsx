import styles from '../styles/burger-menu.module.css'

interface Props {
    isActive: boolean
    setIsActive: () => void
}

export const BurgerMenu = (props: Props) => {
    return (
        <>
            <input
                type="checkbox"
                id="toggle"
                className={styles.input}
                defaultChecked={props.isActive}
                onChange={props.setIsActive}
            />

            <label htmlFor="toggle" className={styles.toggle}>
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
            </label>
        </>
    )
}
