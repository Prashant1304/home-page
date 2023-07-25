"use client"
import Link from 'next/link';

const aboutPage = () => {
    return (
        <div>
            About Page
            <Link href="/nestedRoute/nested">Nested Page</Link>
        </div>
    )
}

export default aboutPage