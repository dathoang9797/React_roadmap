import React from 'react';
import TodoStore from "@src/Store/TodoStore";
import { observer } from "mobx-react-lite"

export const Todo = observer(() => {
    console.log(TodoStore.finished)
    return (
        <div onClick={() => TodoStore.toggle()}>{TodoStore.title} - {TodoStore.finished ? "Done" : "Undone"}</div>
    )
})
