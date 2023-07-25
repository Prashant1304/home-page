"use client"
import Link from 'next/link';

const dynamicRoute = ({params}:{params:{id:number}}) => {
    return (
        <div>
            dynamic Route {params.id}
            <Link href="/">Back to home</Link>
        </div>
    )
}

export default dynamicRoute