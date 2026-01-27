import { useState } from "react"
import { BurgerMenu } from "../../../../shared/ui/burger-menu"
import styles from '../styles/Header.module.css'
import { NavItem } from "../../../../shared/ui/Nav-item"
import { NavItems } from "../../../../shared/constants"

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className={styles.header}>
            <a href="/">sohi</a>
            <nav className={styles.nav__bar}>
                <ul className={isMenuOpen ? `${styles.nav__list} ${styles.active}` : styles.nav__list}>
                    {NavItems.map(i => (
                        <NavItem key={i} text={i} />
                    ))}
                </ul>
            </nav>
            <BurgerMenu isActive={isMenuOpen} setIsActive={() => setIsMenuOpen(!isMenuOpen)} />
        </header>
    )
}