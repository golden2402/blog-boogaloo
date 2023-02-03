import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();

  return (
    <div className="blog-page">
      <p>{`You're on blog ${id}!`}</p>
    </div>
  );
}

export default BlogPage;