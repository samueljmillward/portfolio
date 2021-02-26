import styled from 'styled-components';

import { Link } from 'gatsby';

const StyledButton = styled(Link)`
    &:link,
    &:visited {
        border-radius: 2%;
        font-size: 1rem;
        color: orange;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid;
        padding: 3px;
        transition-property: all 0.2s;
        margin: 0 3em 3em 0;
    }

    &:hover {
        border-radius: 2px;
        background-color: #69a589;
        color: white;
        box-shadow: 0 1rem 2rem rgba(black, 0.15);
        transform: translateY(-0.2rem);
    }

    &:active {
        box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
        transform: translateY(0);
    }
`;

export default StyledButton;
