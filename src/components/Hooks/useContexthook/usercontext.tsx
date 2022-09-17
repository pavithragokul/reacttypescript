import React, { createContext, useState } from "react";

export type userProp = {
    name : string
    email : string
}
type UserContextType = {
    user : userProp | null
    setUser: React.Dispatch<React.SetStateAction<userProp | null>>
}
type UserContextProviderProps = {
    children : React.ReactNode
}
export const UserContext = createContext<UserContextType | null>(null)
export const UserContextProvider = ({children} : UserContextProviderProps) => {
    const [user, setUser] = useState<userProp | null>(null)
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

//if you want to eliminate the need of nlll check of UserContext in if statements then use type assertion like as UserContext