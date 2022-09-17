
type buttonProps = {
    varient: 'primary' | 'secondary'
    children :string
} & Omit< React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({varient, children}: buttonProps)=>{
    return(
        <button className={`class-name-${varient}`} >{children}</button>
    )
}