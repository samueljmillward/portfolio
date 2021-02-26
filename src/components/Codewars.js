import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import StyledButton from '../components/StyledButton';
import Hyperlink from '../components/Hyperlink';

const Codewars = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "codewars3.png" }) {
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
                <Link to={'https://github.com/samueljmillward/kata-dojo'}>
                    <Image fluid={image.sharp.fluid} />
                </Link>
                <h2>Codewars Solutions</h2>
                <Hyperlink
                    style={{ color: '#dea5a4' }}
                    href="https://github.com/samueljmillward/kata-dojo"
                >
                    Viewable at GitHub
                </Hyperlink>
                <p>An up to date demonstration of my JavaScript proficiency.</p>
                <p>
                    Whilst not a personal coding project; here are all the
                    solutions to every Codewars kata I have attempted so far.
                </p>
                <StyledButton
                    to={'https://github.com/samueljmillward/kata-dojo'}
                >
                    View Source Code
                </StyledButton>
            </div>
        </>
    );
};

export default Codewars;
