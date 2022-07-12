import React from 'react';

import Layout from '../components/Layout';
import StyledHeader from '../components/StyledHeader';

export default () => (
    <Layout>
        <StyledHeader>Nice to meet you.</StyledHeader>
        <p>
            My name's <strong>Sam Millward.</strong> I'm a dedicated,
            disciplined and creative software engineer, most comfortable working
            with <strong>Frontend Tech</strong> such as{' '}
            <strong>JavaScript and React</strong>.
        </p>
        <p>
            I am actively searching for a <strong>Junior Developer</strong>{' '}
            role.
        </p>
    </Layout>
);
