import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';
import Navbar from '../components/Navbar';
import Main from '../styles/Main';
import Wrapper from '../styles/Wrapper';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();

    return (
        <>
            <GlobalStyle />
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <Navbar />
            <Main>
                <Wrapper>{children}</Wrapper>
            </Main>
        </>
    );
};

export default Layout;
