import { NavLink } from "react-router-dom";

const { protocol, hostname } = window.location;
const host = `${protocol}//${hostname}`;

const BlogPost = ({title, date, author, content, id}) => {
    const linkTo = `/blogs/${id}`;
 
    return (
        <div className='blog-post'>
            <NavLink to={linkTo}>
                <h1 className='blog-title'>{title}</h1>
            </NavLink>
            <h2 className='blog-author'>{author}</h2>
            <h2 className='blog-date'>{date}</h2>
            <p className='blog-content'>{content}</p>
            <NavLink to={linkTo}>
                <p>{`Read the full post at ${host}${linkTo}`}</p>
            </NavLink>
        </div>
    );
};

export default BlogPost;