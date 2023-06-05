import React from 'react';

import { render } from '@farfetch/global-apps-box/shared/test-utils';

import user-screen from '..';

describe('<user-screen /> props', () => {
    it('should render user-screen with default props', () => {
        const { container } = render(
            <user-screen />
        );

        expect(container).toMatchSnapshot();
    });
});
