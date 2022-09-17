import React from "react"

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
}
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
Omit<React.ComponentProps<E>,keyof TextOwnProps<E>>
export const TextComponent = <E extends React.ElementType = 'div'> (props:TextProps<E>) => {
    const Component = props.as || 'div'
    return <Component className={`class-name-${props.size}-${props.color}`}> {props.children } </Component>
}