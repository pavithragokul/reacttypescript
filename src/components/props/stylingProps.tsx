import React from "react"

type styleProps = {
    style : React.CSSProperties
}
export const StylingProps = (props : styleProps) => {
    return (
        <div style = {props.style}>
            Text content here
        </div>
    )
}