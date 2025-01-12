import TimeStore from '@src/Store/TimeStore'
import { observer } from "mobx-react";


export const TimerView = observer(() => {

    return <span>Seconds passed: {TimeStore.secondsPassed}</span>
})

setInterval(() => {
    TimeStore.increaseTimer();
}, 1000)