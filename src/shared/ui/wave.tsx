import styles from '../styles/wave.module.css'

interface Props {
    rotate_deg?: string
}

export const Wave = ({ rotate_deg = '180deg' }: Props) => {
    return (
        <div className={styles.wrapper}>
            <svg
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ "--deg": rotate_deg } as React.CSSProperties}
            >
                <path className={styles.wave} />
            </svg>
        </div >
    )
}
