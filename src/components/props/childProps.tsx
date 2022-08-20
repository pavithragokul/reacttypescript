type ChildPropsReal = {
    children : string
}
export const ChildProps = (props: ChildPropsReal) => {
    return <h2>{props.children}</h2>
}