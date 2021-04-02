

export default function Assett({assetData}) {
  return (
    <div>
      <h1>Asset Page</h1>
      <h1>{assetData.name}</h1>
      <h1>{assetData.description}</h1>
    </div>
  )
}


export async function getStaticProps() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
  const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query GetCategories {
        categories {
          id
          name
          description
          assets {
            id
            name
            description
          }
        }
    }
    `
  });

  return {
    props: {
      categories: data.categories
    }
  }
}

// export async function getStaticPaths() {
//   // Return a list of possible value for id
// }

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
// }
