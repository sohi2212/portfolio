import type { InfoItemData } from "../constant/type";
import styles from '../styles/InfoItem.module.css'

export const InfoItem = ({ icon, parts }: InfoItemData) => {
    return (
        <div className={styles.item}>
            {icon && <div className={styles.item__icon}>{icon}</div>}
            <div className={styles.item__text}>
                {parts.map((part, i) =>
                    part.accent ? (
                        <span key={i} className={styles.accent}>{part.text}</span>
                    ) : (
                        <span key={i}>{part.text}</span>
                    )
                )}
            </div>
        </div>
    );
};
