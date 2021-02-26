import React from 'react';
import styled from 'styled-components';

import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import StyledButton from './StyledButton';
import Hyperlink from '../components/Hyperlink';

const ProjectWrapper = styled('div')`
    p:last-of-type {
        margin: 0;
    }
`;

const Nimcic = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "nimcic.png" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <>
            <ProjectWrapper>
                <Link to={'/404'}>
                    <Image fluid={image.sharp.fluid} />
                </Link>
                <h2>NIMCIC</h2>
                <h3>
                    <Hyperlink
                        style={{ color: '#dea5a4' }}
                        href="https://nimcic.org.uk/"
                    >
                        Viewable at nimcic.org.uk
                    </Hyperlink>
                </h3>
                <p>
                    Static, single page and fully responsive site detailing
                    future projects of the New Islington Marina Community.
                </p>
                <p>Written in HTML and CSS. Utilising Sass and BEM.</p>
                <StyledButton to={'https://github.com/samueljmillward/nimcic'}>
                    View Source Code
                </StyledButton>
            </ProjectWrapper>
        </>
    );
};

export default Nimcic;
