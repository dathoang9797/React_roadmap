import React from 'react'

type IProps = {
    count: number,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Count = (props: IProps) => {
    const { count } = props;
    return (
        <div className="card">
            <button onClick={props.onClick}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
    )
}
