import { useContext } from "react"
import { UserContext } from "./usercontext"

export const User1 = () => {
    const usercontext = useContext(UserContext)
    const handleLogIn = () => {
            if(usercontext){
                usercontext.setUser({
                    name: 'Pavithra',
                    email: 'pavigokul3@gmail.com'
                })
            }
    }
    const handleLogOut = () => {
            if(usercontext){
                usercontext.setUser(null)
            }
    }
    return (
        <div>
            <h2>Context always created outside the componenet and its future value must set inside the component</h2>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log out</button>
            <div>User name is  {usercontext?.user?.name}</div>
            <div>user email is {usercontext?.user?.email}</div>
        </div>
    )
}