import React from 'react';

import Layout from '../components/Layout';
import Hyperlink from '../components/Hyperlink';

export default () => (
    <>
        <Layout>
            <h1>Shoot me a line.</h1>
            <ul>
                <li>
                    <Hyperlink href="mailto:samuel.j.millward@hotmail.com">
                        E-Mail
                    </Hyperlink>
                </li>
                <li>
                    <Hyperlink href="https://github.com/samueljmillward">
                        GitHub
                    </Hyperlink>
                </li>
                <li>
                    <Hyperlink href="https://www.linkedin.com/in/samueljmillward">
                        LinkedIn
                    </Hyperlink>
                </li>
            </ul>
        </Layout>
    </>
);
