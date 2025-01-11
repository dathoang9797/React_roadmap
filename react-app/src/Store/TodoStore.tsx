import { makeObservable, observable, action } from "mobx";

class TodoStore {
    id = Math.random()
    title = "Test Store"
    finished = false

    constructor() {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action
        })
    }

    toggle() {
        this.finished = !this.finished
    }
}

export default new TodoStore();