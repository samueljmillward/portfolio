import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 24em;
    font-size: 1.4em;

    @media (max-width: 1100px) {
        font-size: 1.8em;
    }

    @media (max-width: 850px) {
        font-size: 1.2em;
    }

    @media (max-width: 400px) {
        font-size: 0.8em;
    }
`;

export default Wrapper;
