import React from "react"

type ButtonProps = {
    onClickHandler : (event : React.MouseEvent<HTMLButtonElement>, id : number) => void
}

export const EventProps = (props: ButtonProps) => {
    return <button onClick={(event) =>props.onClickHandler(event,1)}>Click</button>
}

