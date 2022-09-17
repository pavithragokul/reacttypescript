type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'bottom' | 'center'

type ToastProps = {
    position : | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}
export const Toast = ({position}  : ToastProps)=>{
    return (
        <div>
        Toast Notification Position = {position} 
        </div>
    )
}