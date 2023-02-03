import { useState, useEffect } from "react";
import parseBlogPosts from "../util/parseBlogPosts";

const BlogPreviewPage = () => {
    const [previews, setPreviews] = useState([])

  useEffect(() => {
    async function getPreviews() {
      const response = await fetch("/api/preview")

      if (response.ok) {
        response.json().then(body => {
          setPreviews(body);
        })
      }
    }

    if (previews.length === 0) {
      getPreviews();
    }
  }, [previews])

  return (
    <div>
      {parseBlogPosts(previews)}
    </div>
  );
}

export default BlogPreviewPage;