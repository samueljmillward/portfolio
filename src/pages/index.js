import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

export default () => (
    <Layout>
        <Main>
            <Wrapper>
                <h1>Nice to meet you.</h1>
                <p>
                    My name's <strong>Sam Millward.</strong> I'm a dedicated,
                    disciplined and creative software engineer.
                </p>
                <p>
                    I recently graduated{' '}
                    <Hyperlink href="https://www.manchestercodes.com/">
                        Coding Bootcamp
                    </Hyperlink>{' '}
                    and am actively searching for a Junior Developer role.
                </p>
            </Wrapper>
        </Main>
    </Layout>
);

const Main = styled.div`
    height: 42em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 20em;
    font-size: 1.4em;
`;

const Hyperlink = styled.a`
    text-decoration: none;
    color: #be8418;
    font-weight: bold;
`;
