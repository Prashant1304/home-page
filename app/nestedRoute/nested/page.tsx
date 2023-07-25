"use client"
import Link from 'next/link';

const aboutPage = () => {
    return (
        <div>
            About Page
            <Link href="/nestedRoute">Inside nested Page</Link>
        </div>
    )
}

export default aboutPage