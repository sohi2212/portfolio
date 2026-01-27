import styles from "../styles/typewriter.module.css";
interface Props {
    text: string | string[]
}

export const Typewriter = (props: Props) => {

    return (
        <h1 className={styles.content}>
            <ol>
                {Array.isArray(props.text) ?
                    props.text.map(el => (
                        <li className={styles.item}
                            key={el}
                            style={{
                                "--steps": props.text.length,
                                "--duration": `${props.text.length * 3 * 2}s`
                            } as React.CSSProperties}>
                            <span>{el}</span>
                        </li>
                    ))
                    : <li
                        style={{
                            "--steps": 1,
                            "--duration": `${1 * 3 * 2}s`
                        } as React.CSSProperties}>{props.text}</li>}
            </ol>
        </h1>

    );
}
