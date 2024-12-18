import type { FC } from "preact/compat";
import styles from './WordHint.module.css';

interface WordHintProps {}

export const WordHint: FC<WordHintProps> = ({}) => {
    return <div className={styles.wordHint__wrapper}></div>
}