import React from 'react'

type IGreet = {
    name?: string
}

export const Greet = (props: IGreet) => {
    return (
        <div>Hello {props?.name}</div>
    )
}
