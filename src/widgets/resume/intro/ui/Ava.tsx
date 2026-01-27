import { useParallaxHover } from "../../../../shared/ui"
import styles from '../styles/Ava.module.css'

export const Ava = () => {
    const { frameRef, imgRef, handleMouseLeave, handleMouseMove } = useParallaxHover()
    return (
        <div
            ref={frameRef}
            className={styles.frame}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img ref={imgRef} src="/ava.png" alt="avatar" />
        </div>
    )
}