import Link from 'next/link';

const dataPage = async () => {
  const res = await fetch("https://api.github.com")
  const data = await res.json()
return (
  <div>{data.current_user_url}
  <Link href="/">Back to home</Link>
  </div>
)
}

export default dataPage