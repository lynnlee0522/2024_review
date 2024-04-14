
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query books {
    books {
      title
      author
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  console.log("---error---", error);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data?.books?.map(({ title, author }) => (
    <div key={title}>
      <div>{title} - {author}</div>
    </div>
  ));
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayLocations />
    </div>
  );
}