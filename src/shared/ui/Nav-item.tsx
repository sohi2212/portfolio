import styles from '../styles/Nav-item.module.css'

interface Props {
    text: string
    url: string
}

export const NavItem = (props: Props) => {
    return (
        <li className={styles.nav__item}>
            <a href={props.url}>{props.text}</a>
        </li>
    )
}