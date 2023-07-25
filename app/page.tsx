// import Image from 'next/image'
'use client'
import { useState } from "react"
import Link from 'next/link';

const homePage = () => {
  const [increment, setIncrement] = useState(0)
  
  const handleIncrenent = () => {
    setIncrement(increment + 1);
  }

  const handleDecrement = () => {
    setIncrement(increment - 1);
  }

return (
  <div className="parent">
    <div>
    <div className="number" style={increment < 0 ? {color:"red"} : {color:"green"}}>{increment}</div>
    </div>
    <div className="click-parent">
    <div className="increment" onClick={handleIncrenent}>Increment</div>
    <div className="decrement" onClick={handleDecrement}>decrement</div>
    </div>
    <Link href="/about">second page</Link>
    <Link href="/dataResponse">data page</Link>
  </div>
)
}

export default homePage