import { useState } from "react"
import styles from '../styles/Header.module.css'
import { NavItems } from "../../../../../../shared/config"
import { NavItem } from "../../../../../../shared/ui/nav-item"
import { BurgerMenu } from "../../../../../../shared/ui"

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className={styles.header}>
            <a className={styles.nav__brand} href="/">sohi</a>
            <nav className={styles.nav__bar}>
                <ul className={isMenuOpen ? `${styles.nav__list} ${styles.active}` : styles.nav__list}>
                    {NavItems.map(i => (
                        <NavItem key={i.text} text={i.text} url={i.url} />
                    ))}
                </ul>
            </nav>
            <BurgerMenu isActive={isMenuOpen} setIsActive={() => setIsMenuOpen(!isMenuOpen)} />
        </header>
    )
}