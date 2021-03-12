import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import StyledButton from '../components/StyledButton';
import Hyperlink from '../components/Hyperlink';

const Portfolio = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "portfolio2.png" }) {
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
            <div>
                <Link to={'/'}>
                    <Image fluid={image.sharp.fluid} />
                </Link>
                <h2>Portfolio</h2>
                <h3>
                    <Hyperlink style={{ color: '#dea5a4' }} href="/">
                        Viewable at samueljmillward.com
                    </Hyperlink>
                </h3>
                <p>Portfolio detailing my personal, pet projects.</p>
                <p>
                    Fully responsive and built using Gatsby with
                    styled-components.
                </p>
                <StyledButton
                    to={'https://github.com/samueljmillward/portfolio'}
                >
                    View Source Code
                </StyledButton>
            </div>
        </>
    );
};

export default Portfolio;
