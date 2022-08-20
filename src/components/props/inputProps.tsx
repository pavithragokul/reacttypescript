import React from "react"

type InputPropsReal = {
    value : string
    eventHandler: (event : React.ChangeEvent<HTMLInputElement>) => void
}

export const InputProps = (props : InputPropsReal) => {
    return <input type={'text'}  value = {props.value} onChange = {props.eventHandler}/>
}