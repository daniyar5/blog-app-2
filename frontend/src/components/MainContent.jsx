import React, {useContext} from 'react'
import { PostsContext } from '../context/PostsContext';
import { Link } from 'react-router-dom';
import Post from './Post';
function MainContent(){

    const { posts } = useContext(PostsContext);

    return (
        <div className='inner-main'>
            <Link style={{width: "80%"}} to={"/newForm"}> <button className="create-btn">Create new post</button></Link>
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <Post index={index} title={post.title} desc={post.desc} author={post.author}/>
                ))
            ) : (
                <div className="window">
                    <div className="inner-window">
                        <p>You don't have any posts yet.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MainContent