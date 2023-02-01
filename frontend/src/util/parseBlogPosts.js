import BlogPost from "../components/BlogPost";

const parseBlogPosts = (posts) => {
    const postComponents = [];

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        postComponents.push(
            <BlogPost
                key={i}
                title={post.title}
                author={post.author}
                date={post.date}
                content={post.content}
            />
        )
    }

    return postComponents;
}

export default parseBlogPosts;