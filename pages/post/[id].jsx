const BlogId = () => {
  return (
    <div>
      <h1>welcome to blog id</h1>
    </div>
  );
};
export async function getStaticProps() {}
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 1 } }, { params: { id: 2 } }],
    fallback: false
  };
}
export default BlogId;
