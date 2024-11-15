import React from 'react';
import {Link } from 'react-router-dom';

function HeaderSection(){
    return (
        <>
        <header>
            <div className="header-inner">
                <h1>My Blog</h1>
                <nav>
                    <Link className='link' to='/'>Home page</Link>
                    <Link className='link' to='newForm'>Create post</Link>
                </nav>
            </div>
        </header>
        </>
    )
}

export default HeaderSection