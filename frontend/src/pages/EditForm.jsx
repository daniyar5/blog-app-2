import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

function EditForm() {
    const { state } = useLocation();
    const { post } = state;
    const { updatePost } = useContext(PostsContext);

    const [data, setData] = useState({
        title: post.title,
        desc: post.desc,
        author: post.author,
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        updatePost(post.index, data);
        navigate('/');
    };

    return (
        <div className='post-form'>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    name="title"
                    className="title"
                    placeholder="Title..."
                    value={data.title}
                    onChange={handleChange}
                />
                <textarea
                    name="desc"
                    className="desc"
                    placeholder="Description..."
                    value={data.desc}
                    onChange={handleChange}
                ></textarea>
                <input
                    type="text"
                    name="author"
                    className="author"
                    placeholder="Author..."
                    value={data.author}
                    onChange={handleChange}
                />
                <button style={{ margin: 0, width: "80%" }} type="submit" className="create-btn">
                    Update
                </button>
            </form>
        </div>
    );
}

export default EditForm;
