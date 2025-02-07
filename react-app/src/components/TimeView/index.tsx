import TimeStore from '@src/Store/TimeStore'
import { observer } from "mobx-react";
import styles from './index.module.css';

export const TimerView = observer(() => {
    return <span className={styles.container}>
        Seconds passed: {TimeStore?.secondsPassed 
        ? TimeStore.secondsPassed 
        : 0}
    </span>
})

setInterval(() => {
    TimeStore.increaseTimer();
}, 1000)