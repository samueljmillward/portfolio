import React from 'react';
import styled from 'styled-components';

import { BiEnvelope } from 'react-icons/bi';
import { BsPersonSquare } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';

import MenuLink from '../components/MenuLink';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Menu>
                    <MenuLink to="/">
                        <BsPersonSquare size={29} />
                        <h5>About</h5>
                    </MenuLink>

                    <MenuLink to="/contact/">
                        <BiEnvelope size={32} />
                        <h5>Contact</h5>
                    </MenuLink>

                    <MenuLink to="/projects/">
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