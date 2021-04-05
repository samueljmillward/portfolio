import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 1.4em;
    padding: 1.5rem;
    padding-bottom: 5rem;

    p {
        margin-bottom: 2.5rem;
    }

    @media (max-width: 1100px) {
        p {
            max-width: 640px;
        }
    }

    @media (max-width: 870px) {
        font-size: 1.1em;
        p {
            max-width: 520px;
        }
    }

    @media (max-width: 450px) {
        font-size: 1.2em;
        p {
            max-width: 280px;
            margin-bottom: 2rem;
        }

        h3,
        h2,
        h1 {
            font-size: 1.3em;
        }
    }
`;

export default Wrapper;
