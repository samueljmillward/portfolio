import React from 'react';
import styled from 'styled-components';

import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const ProjectWrapper = styled('div')``;

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
            <ProjectWrapper>
                <Link to={'/404'}>
                    <Image fluid={image.sharp.fluid} />
                </Link>
                <h2>Espresso</h2>
                <h3>In Development</h3>
                <p>
                    A data tracking React application aimed at Home Baristas
                    having trouble tracking the seemingly endless variables
                    affecting the espresso brewing process
                </p>
            </ProjectWrapper>
        </>
    );
};

export default Espresso;
