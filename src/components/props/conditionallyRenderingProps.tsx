type RenderingProps = {
    status : 'loading' | 'sucess' | 'error'
}
export const ConditionallyRenderingProps = (props : RenderingProps) =>{
    let message
    if(props.status === 'loading'){
        message = 'Loading';
    }
    if(props.status === 'sucess'){
        message = 'data fetched successfully'
    }
    if(props.status === 'error'){
        message = 'Error while fetching data'
    }
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}