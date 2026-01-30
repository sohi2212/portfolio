import styles from '../styles/ContactCard.module.css'

interface Props {
    text: string,
    img: string
    url: string
}

export const ContactCard = (props: Props) => {
    return (
        <div className={styles.contact__card}>
            <a style={{ '--bg-img': `url(${props.img})` } as React.CSSProperties} href={props.url}></a>
            <span>{props.text}</span>
        </div>
    )
}