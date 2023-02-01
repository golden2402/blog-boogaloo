const BlogPost = ({title, date, author, content}) => (
    <div class='blog-post'>
        <h1 class='blog-post__title'>{title}</h1>
        <h2 class='blog-post__author'>{author}</h2>
        <h2 class='blog-post__date'>{date}</h2>
        <p class='blog-post__content'>{content}</p>
    </div>
);

export default BlogPost;