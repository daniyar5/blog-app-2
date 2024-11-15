import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { PostsProvider } from './context/PostsContext';
import HeaderSection from './components/HeaderSection';
import Footer from './components/Footer';
function Layout(){
    return (
        <PostsProvider>
            <main>
            <HeaderSection />
                <Outlet />
            <Footer />
            </main>
        </PostsProvider>
    );
};

export default Layout;