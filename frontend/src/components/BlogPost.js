const BlogPost = ({title, date, author, content}) => (
    <div class='blog-post'>
        <h1 className='blog-title'>{title}</h1>
        <h2 className='blog-author'>{author}</h2>
        <h2 className='blog-date'>{date}</h2>
        <p className='blog-content'>{content}</p>
    </div>
);

export default BlogPost;