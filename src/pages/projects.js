import React from 'react';
import styled from 'styled-components';

import Espresso from '../components/Espresso';
import Nimcic from '../components/Nimcic';
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
            </MyProjects>
        </Layout>
    </>
);
