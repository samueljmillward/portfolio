import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import Wrapper from '../styles/Wrapper';
import Main from '../styles/Main';

const StyledMarkdown = styled.p`
    max-width: 960px;
    line-height: 1.4;
`;

export default () => (
    <>
        <GlobalStyle />
        <Wrapper>
            <Main>
                <h1>Nice to meet you.</h1>

                <StyledMarkdown>
                    <p>
                        My name's <strong>Sam Millward.</strong> I'm a
                        dedicated, disciplined and creative software engineer.
                    </p>
                    <p>
                        I recently graduated coding bootcamp and am searching
                        for my first Junior Developer role.
                    </p>
                </StyledMarkdown>
            </Main>
        </Wrapper>
    </>
);
