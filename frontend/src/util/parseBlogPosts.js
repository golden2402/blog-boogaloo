import BlogPost from "../components/BlogPost";

const parseBlogPosts = (posts) => {
    const postComponents = [];

    for (const post in posts) {
        postComponents.push(
            <BlogPost
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