import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getContent() {
      const response = await fetch(`/api/blog/${id}`);

      console.log(response)

      if (response.ok) {
        response.json().then(body => {
          setData(body);
        });
      }
    }

    if (data === null) {
      getContent();
    }
  }, [id, data])

  return (
    <div className="blog-page">
      {
        // if we have non-null data, spread these elements in the parent div:
        data !== null
          ? (
            <>
              <h1 className="blog-page-title">{data.title}</h1>
              <h2 className="blog-page-author">{data.author}</h2>
              {data.date && (
                <h2 className="blog-page-date">
                  {data.date}
                </h2>
              )}
              <p className="blog-page-content">{data.content}</p>
            </>
          )
          // otherwise just display a loading element:
          : <h1>Loading...</h1>
      }
      <NavLink to="/blogs">Back</NavLink>
    </div>
  );
}

export default BlogPage;