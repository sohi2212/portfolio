import styles from '../styles/icon.module.css'

interface Props {
    src: string
    alt?: string
    height: string
    width: string
}

export const Icon = (props: Props) => {
    return (
        <img
            className={styles.icon}
            src={props.src}
            alt={props.alt ? props.alt : 'icon'}
            style={{
                '--icon-height': props.height,
                '--icon-width': props.width
            } as React.CSSProperties}
        />
    )
}