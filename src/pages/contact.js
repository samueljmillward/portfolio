import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Hyperlink from '../components/Hyperlink';

const StyledLink = styled(Link)`
    font-size: 22px;
    text-decoration: underline #97b3ce;
    color: #69a589;
`;

const Index = () => {
    return (
        <>
            <Layout>
                <h1>Shoot me a line.</h1>
                <ul>
                    <li>
                        <Hyperlink href="mailto:samuel.j.millward@hotmail.com">
                            E-Mail
                        </Hyperlink>
                    </li>
                    <li>
                        <Hyperlink href="https://github.com/samueljmillward">
                            GitHub
                        </Hyperlink>
                    </li>
                    <li>
                        <Hyperlink href="https://www.linkedin.com/in/samueljmillward">
                            LinkedIn
                        </Hyperlink>
                    </li>
                </ul>
                <StyledLink to="/resume/">View Online CV &rarr; </StyledLink>
            </Layout>
        </>
    );
};

export default Index;
