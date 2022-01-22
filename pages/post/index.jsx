const Post = ({ data }) => {
  return (
    <div>
      <h1>welcome to post page </h1>
      <hr />
      {data && data.map((items) => (
        <div key={items.id}>
          <h4>{items.title}</h4>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();
  return {
    props: {
      data: data
    }
  };
}

export default Post;
