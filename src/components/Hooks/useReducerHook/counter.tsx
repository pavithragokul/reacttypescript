import React, { useReducer } from 'react';
type CounterState = {
    count : number
}
type ResetAction = {
    type :  'reset'
    payload?: number
}

type updateAction = {
    type : 'increment' | 'decrement'
    payload : number
}
type CounterAction = updateAction | ResetAction
const initialState = { count : 0 };

//reducer function responsible for updating state
const reducer = (state : CounterState, action : CounterAction)=>{
    switch(action.type){
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset' :
            return initialState;
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count - {state.count}
            <button onClick={()=>dispatch( {type:'increment' , payload : 10 })}>Increment 10</button>
            <button onClick={()=>dispatch({type:'decrement' , payload : 10 })}>Decrement 10</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>

        </>
    );
}
