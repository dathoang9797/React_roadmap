import { IGreet } from './greet.types'

export const Greet = (props: IGreet) => {
    return (
        <div>Hello {props?.name ? props.name : "Guest"}</div>
    )
}
