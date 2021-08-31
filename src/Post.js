import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article className="post">
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
            </Link>
            <p className="postBody">{
                (post.body).length <= 999
                    ? post.body
                    : `${(post.body).slice(0, 999)}...`
            }</p>
            <h2 className="postBody">ID :{post.id}</h2>
               <h2 className="postBody">name :{post.name}</h2>
                        <h2 className="postBody">email :{post.email}</h2>

            <h2 className="postBody">UserId :{post.userId}</h2>
        </article>
    )
}

export default Post
