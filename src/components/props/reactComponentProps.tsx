import React from "react"

type ReactProps = {
    children : React.ReactNode
}

export const ReactComponentProps = (props : ReactProps) => {
    return <h2>{props.children}</h2>
}