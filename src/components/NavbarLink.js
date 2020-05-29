import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const NavbarLink = styled(Link)`
    position: relative;
    text-align: center;
    font-weight: bold;
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
`;

export default NavbarLink