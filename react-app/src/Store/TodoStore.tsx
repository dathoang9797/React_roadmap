import { makeObservable, observable, action } from "mobx";

class TodoStore {
    id = Math.random()
    title = "Test Store"
    user = { name: "Dat", age: 27 }
    finished = false

    constructor() {
        makeObservable(this, {
            title: observable,
            finished: observable,
            user: observable,
            toggle: action
        })
    }

    toggle() {
        this.finished = !this.finished
    }
}

export default new TodoStore();