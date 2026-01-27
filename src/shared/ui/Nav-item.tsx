import styles from '../styles/Nav-item.module.css'

interface Props {
    text: string
}

export const NavItem = (props: Props) => {
    return (
        <li className={styles.nav__item}>{props.text}</li>
    )
}