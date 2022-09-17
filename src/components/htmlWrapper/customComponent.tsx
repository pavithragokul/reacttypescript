import React from "react";
import { Greet } from "../props/greet";

export const CustomComponent = (props:React.ComponentProps<typeof Greet>)=>{
    return (
        <div>
            {props.isLoggedIn && props.name} 
        </div>
    )
}