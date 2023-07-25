// they are of 3 types

// 1 SSR (Server side rendering) // dynamic server render data it is fetch fresh on each request ensuring the content is upto date
// 2 SSG (Static side genration) // remove cache: "no-store" // it will automatically fetch the data and also catch it it dosent changes frequently // first it fetch and then have the data and display it
// 3 ISR (Incremental static Genration) // for ISR remove cache: "no-store" and place next.js API called revalidate // will validate new data on every 5 second on request not automatically // it combine both the above fetching technique // the data will be catched after a certion time period




import Link from 'next/link';

const dataPage = async () => {
  const res = await fetch("https://api.github.com",{
    cache: "no-store", // means dont store it simply call it and display what is needed // it insure it refetch every single time so it is SSR
    //for SSG remove cache: "no-store" // it will automatically fetch the data and also catch it it dosent changes frequently // first it fetch and then have the data and display it

    // for ISR remove cache: "no-store" and place next.js specific API called revalidate
    next: {
        revalidate: 5 // will validate new data on every 5 second on request not automatically
      }
  })
  const data = await res.json()
return (
  <div>{data.current_user_url}
  <Link href="/">Back to home</Link>
  </div>
)
}

export default dataPage