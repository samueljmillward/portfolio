import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const NavBarWrapper = styled.nav`
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export default NavBarWrapper;
