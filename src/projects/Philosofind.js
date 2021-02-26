import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import StyledButton from '../components/StyledButton';
import Hyperlink from '../components/Hyperlink';

const Philosofind = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "philosofind4.png" }) {
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
                <Link to={'https://philosofind.co.uk/'}>
                    <Image fluid={image.sharp.fluid} />
                </Link>
                <h2>Philosofind</h2>
                <h3>
                    <Hyperlink
                        style={{ color: '#dea5a4' }}
                        href="https://philosofind.co.uk/"
                    >
                        Viewable at philosofind.org.uk
                    </Hyperlink>
                </h3>
                <p>
                    Final project for Manchester Codes Software Engineer
                    bootcamp.
                </p>
                <p>
                    Philosophy quote generator using React with a MongoDB
                    database. Pair programmed remotely during initial UK
                    Covid-19 crisis.
                </p>
                <p>
                    Personally responsible for Frontend design and architecture
                    utilising Sass and BEM.
                </p>
                <StyledButton
                    to={'https://github.com/jimmyb2508/Philosofind_v.1.0/'}
                >
                    View Source Code
                </StyledButton>
            </div>
        </>
    );
};

export default Philosofind;
