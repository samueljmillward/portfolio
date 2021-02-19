import styled from 'styled-components';
import { Link } from 'gatsby';

const MenuLink = styled(Link)`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #847c7c;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;

    &:hover {
        color: #c46404;
    }

    h5 {
        margin: 0.4rem;
    }
`;

export default MenuLink;
