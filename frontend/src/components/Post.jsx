import React from 'react'
import { Link } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function Post(props){

    const { deletePost } = useContext(PostsContext);

    const navigate = useNavigate()
    function handleDelete() {
        deletePost(props.index);
    }

    function handleEdit() {
        navigate('/editForm', { state: { post: props } });
    }

    return (
        <div className='post' key={props.index}>
            <p className='title'>{props.title}</p>
            <p className='desc' >{props.desc}</p>
            <p className='author'>by {props.author}</p>
            <div className="btns">
                <button onClick={handleEdit} className="create-btn">Edit</button>
                <button onClick={handleDelete} className="create-btn">Delete</button>
            </div>
        </div>
    )
}

export default Post;