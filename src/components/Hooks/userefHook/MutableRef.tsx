import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef<number | null>(null);
    //interval.current holds the current interval id
    const stopTimer = () => {
        if(intervalRef.current)
        window.clearInterval(intervalRef.current)
    }
    useEffect(()=>{
        intervalRef.current = window.setInterval(()=>{
            setTimer((timer)=>timer + 1)
        }, 1000)
        return () => {
            stopTimer()
        }
    }, [])
    return (
        <div>
            <button onClick={()=>stopTimer()}>stop timer</button>
        </div>
    )
}