import React from 'react';

import StyledButton from '../components/StyledButton';
import Hyperlink from '../components/Hyperlink';

const Codewars = () => {
    return (
        <>
            <div>
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
