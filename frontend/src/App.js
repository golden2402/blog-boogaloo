import { useEffect, useState } from "react";

import BlogPost from "./components/BlogPost";

const App = () => {
  const [previews, setPreviews] = useState([])

  useEffect(() => {
    async function getPreviews() {
      const response = await fetch("api/preview")

      if (response.ok) {
        setPreviews(JSON.parse(response.body))
      }
    }

    if (previews.length === 0) {
      getPreviews()
    }
  }, [previews])

  return (
    <div>
      <BlogPost
        title='In defense of linked lists'
        author='antirez'
        date='88 days ago.'
        content='A few days ago, on Twitter (oh, dear Twitter: whatever happens I’ll be there as long as possible – if you care about people that put a lot of energy in creating it, think twice before leaving the platform). So, on Twitter, I was talking about a very bad implementation of linked lists written in Rust. From the tone of certain replies, I got the feeling that many people think linked lists are like a joke. A trivial data structure that is only good for coding interviews, otherwise totally useless. In a word: the bubble sort of data structures. I disagree, so I thought of writing this blog post full of all the things I love about linked lists.'
      />
    </div>
  );
}

export default App;