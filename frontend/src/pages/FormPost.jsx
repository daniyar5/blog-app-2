import React, { useState, useContext } from 'react';
import { PostsContext } from '../context/PostsContext';
import { useNavigate } from 'react-router-dom';
function FormPost() {
    const [data, setData] = useState({
        title: "",
        desc: "",
        author: "",
    });

    const { addPost } = useContext(PostsContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        addPost(data);
        setData({
            title: "",
            desc: "",
            author: "",
        });

        navigate('/')
    };

    return (
        <div className='post-form'>
            <form onSubmit={handleSubmit}>
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
                <button style={{margin: 0, width: "80%"}} type="submit" className="create-btn">Post</button>
            </form>
        </div>
    );
}

export default FormPost;
