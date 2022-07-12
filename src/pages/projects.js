import React from 'react';
import styled from 'styled-components';

import Espresso from '../projects/Espresso';
import Nimcic from '../projects/Nimcic';
import Codewars from '../projects/Codewars';
import Portfolio from '../projects/Portfolio';

import Layout from '../components/Layout';

const MyProjects = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default () => (
    <>
        <Layout>
            <h1>Personal Projects</h1>
            <MyProjects>
                <Espresso />
                <Nimcic />
                <Portfolio />
                <Codewars />
            </MyProjects>
        </Layout>
    </>
);
