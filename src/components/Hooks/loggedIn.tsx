import { useState } from "react";

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogIn = () => {
        setIsLoggedIn(true)
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log out</button>
            {
                isLoggedIn ? (
                    <h3>User is logged in</h3>
                ) : (
                    <h3>
                        user is logged out
                    </h3>
                )
            }
        </div>
    )
}