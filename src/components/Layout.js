import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <GlobalStyle />
            <Navbar />
            <main>{children} </main>
        </div>
    );
};

export default Layout;
