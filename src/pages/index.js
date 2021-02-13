import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';

import Navbar from '../components/Navbar';

export default () => (
    <>
        <GlobalStyle />
        <Navbar />
        <Main>
            <Wrapper>
                <h1>Nice to meet you.</h1>

                <p>
                    My name's <strong>Sam Millward.</strong> I'm a dedicated,
                    disciplined and creative software engineer.
                </p>
                <p>
                    I recently graduated coding bootcamp and am searching for my
                    first Junior Developer role.
                </p>
            </Wrapper>
        </Main>
    </>
);

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 42.5em;
`;

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    max-width: 960px;
`;
