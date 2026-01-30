import styles from '../styles/Card.module.css'

interface Props {
    src: string,
    alt?: string
    name: string
    stack: string[] | string
    url: string
}

export const ProjectCard = (props: Props) => {
    return (
        <div className={styles.card}>
            <img src={props.src} alt={props.alt ? props.alt : 'logo'} loading='lazy' />
            <h5>{props.name}</h5>
            <div> {
                Array.isArray(props.stack) ?
                    props.stack.map((i, idx) => (
                        <span className={styles.badge} key={idx}>{i}</span>
                    ))
                    :
                    <span className={styles.badge}>{props.stack}</span>
            }</div>
            <a href={props.url}>Code</a>
        </div>
    )
}