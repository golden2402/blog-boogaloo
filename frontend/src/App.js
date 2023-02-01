import { useEffect, useState } from "react";
import parseBlogPosts from "./util/parseBlogPosts";

const App = () => {
  const [previews, setPreviews] = useState([])

  useEffect(() => {
    async function getPreviews() {
      const response = await fetch("/api/preview")

      if (response.ok) {
        response.json().then(response => {
          setPreviews(response)
        })
      }
    }

    if (previews.length === 0) {
      getPreviews()
    }
  }, [previews])

  return (
    <div>
      {parseBlogPosts(previews)}
    </div>
  );
}

export default App;