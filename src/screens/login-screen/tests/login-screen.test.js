import React from 'react';

import { render } from '@farfetch/global-apps-box/shared/test-utils';

import login-screen from '..';

describe('<login-screen /> props', () => {
    it('should render login-screen with default props', () => {
        const { container } = render(
            <login-screen />
        );

        expect(container).toMatchSnapshot();
    });
});
