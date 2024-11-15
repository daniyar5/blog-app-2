import React, { createContext, useState } from 'react';
export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
        setPosts((prevPosts) => [...prevPosts, post]);
    };

    const deletePost = (index) => {
        setPosts((prevPosts) => prevPosts.filter((_, i) => i !== index));
    };

    const updatePost = (index, updatedPost) => {
        setPosts((prevPosts) => 
            prevPosts.map((post, i) => (i === index ? updatedPost : post))
        );
    };


    return (
        <PostsContext.Provider value={{ posts, addPost, updatePost, deletePost}}>
            {children}
        </PostsContext.Provider>
    );
};
