// It define in two way static and dynamic

// Static one

export const metadata = {
    title :"Home",
}
    // Output:
    //<head>
    //<title>HOME</title>
    //</head>

    export function StaticMetaData() {
        return (
            <h1>Static MetaData</h1>
        )
    }

    // dynamic one

    export async function genrateMetadata({params, searchParams}) {
        const product = await getProduct(params.id);
        return {
            title : product.title
        }
    }

    export function DynamicMetaData() {
        return (
            <h1>Dynamic MetaData</h1>
        )
    }