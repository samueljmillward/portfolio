import React from 'react';

import Layout from '../components/Layout';
import Hyperlink from '../components/Hyperlink';

export default () => (
    <Layout>
        <h1>Nice to meet you.</h1>
        <p>
            My name's <strong>Sam Millward.</strong> I'm a dedicated,
            disciplined and creative software engineer.
        </p>
        <p>
            I recently graduated{' '}
            <Hyperlink href="https://www.manchestercodes.com/">
                Coding Bootcamp
            </Hyperlink>{' '}
            and am actively searching for a Junior Developer role.
        </p>
    </Layout>
);
