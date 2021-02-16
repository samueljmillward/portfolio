import React from 'react';
import styled from 'styled-components';

import { BiEnvelope } from 'react-icons/bi';
import { BsPersonSquare } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';

import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Menu>
                    <MenuLink href="/" component={RouterLink} label="About">
                        <BsPersonSquare size={29} />
                        <h5>About</h5>
                    </MenuLink>
                    <MenuLink href="/" component={RouterLink} label="Contact">
                        <BiEnvelope size={32} />
                        <h5>Contact</h5>
                    </MenuLink>
                    <MenuLink href="/" component={RouterLink} label="CV">
                        <HiOutlineDocumentText size={32} />
                        <h5>Projects</h5>
                    </MenuLink>
                </Menu>
            </Nav>
        </>
    );
};

export default Navbar;

const Nav = styled.nav`
    position: fixed;
    height: 100%;
    width: 5rem;
    background: #151e4e;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 24rem;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: burlywood;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;

    &:hover {
        color: #c46404;
    }
    h5 {
        margin: 0.4rem;
    }
`;
