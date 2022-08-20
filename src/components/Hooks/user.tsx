import { useState } from "react"
type userProp = {
    name : string
    email : string
}
export const User = (props : userProp) => {
    const [user, setUser] = useState<userProp | null>(null)
    const handleLogIn = () => {
        setUser({
            name: 'Pavithra',
            email: 'pavigokul3@gmil.com'
        })
    }
    const handleLogOut = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log out</button>
            <div>
                user name is {user?.name}
            </div>
            <div>
                user email is {user?.email}
            </div>
        </div>
    )
}