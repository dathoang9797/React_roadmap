import { makeAutoObservable } from "mobx"

class TimerStore {
    secondsPassed = 0;
    list = [1, 2, 3];

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }
}

export default new TimerStore();