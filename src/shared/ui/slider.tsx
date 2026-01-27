import styles from '../styles/slider.module.css'

interface Props {
    card: React.ReactNode[]
}

export const Slider = ({ card }: Props) => {
    return (
        <>
            <div className={styles.slider} style={{ "--quantity": card.length } as React.CSSProperties}>
                {
                    card.map((i, idx) => (
                        <div id={`slide-${idx + 1}`} className={styles.item} style={{ "--position": idx + 1 } as React.CSSProperties} key={idx}>
                            {i}
                        </div>
                    ))
                }
            </div>
            {/* <div className={styles.slider__nav}>
                {
                    card.map((_, idx) => (
                        <a href={`#slide-${idx + 1}`} key={idx}></a>
                    ))
                }
            </div> */}
        </>
    )
}