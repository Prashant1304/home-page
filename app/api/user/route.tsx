// to view localhost:port/api/user

export async function GET(request) {
    // Handle Get request for api/user
    // retrive user from the database or any other data sourse
    const user = [
        {id:1, name:"prashant"},
        {id:2, name:"sinha"},
        {id:3, name:"shwetank"},
    ]
    // send the user as a response
    return new Response(JSON.stringify(user))
}