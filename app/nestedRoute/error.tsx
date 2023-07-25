"use client"

import { useEffect } from "react"

const Error = ({error, reset}:{error:string, reset:React.ReactNode}) => {
    useEffect(()=> {
        console.error(error);
    }, [error]) 
    return (
        <div>
            Something went wrong
            <button onClick={()=> reset()}>Try again</button>
        </div>
    )
}

export default Error