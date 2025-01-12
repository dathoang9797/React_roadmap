import TodoStore from "@src/Store/TodoStore";
import { observer } from "mobx-react-lite"

export const Todo = observer(() => {
    console.log(TodoStore.user)
    return (
        <div onClick={() => TodoStore.toggle()}>{TodoStore.title} - {TodoStore.finished ? "Done" : "Undone"}</div>
    )
})
