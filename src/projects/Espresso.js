import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import StyledButton from '../components/StyledButton';
import Hyperlink from '../components/Hyperlink';

const Espresso = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "espresso.png" }) {
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
                <Link to={'https://espressotracker.netlify.app'}>
                    <Image fluid={image.sharp.fluid} />
                </Link>
                <h2>Espresso Tracker</h2>
                <h3>
                    <Hyperlink
                        style={{ color: '#dea5a4' }}
                        href="https://espressotracker.netlify.app/"
                    >
                        Project viewable at espressotracker.netlify.app
                    </Hyperlink>
                </h3>
                <p>
                    A data tracking React application aimed at Home Baristas
                    having trouble tracking the seemingly endless variables
                    affecting the espresso brewing process.
                </p>

                <p>
                    Built using React and Material UI with React-Hook-Form and
                    Yup's schema validation.
                </p>
                <StyledButton
                    to={'https://github.com/samueljmillward/espresso'}
                >
                    View Source Code
                </StyledButton>
            </div>
        </>
    );
};

export default Espresso;
