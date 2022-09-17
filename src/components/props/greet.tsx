
type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps)=>{
    const { messageCount = 0 } = props
    return (
        <div>
            {props.isLoggedIn? (
            <h2>
                Hi {props.name}! go for it and grab it! {messageCount}
            </h2>
            ): (<h2>Welcome guest</h2>
            )}       
        </div>
    );
}
