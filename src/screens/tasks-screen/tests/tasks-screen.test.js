import React from 'react';

import { render } from '@farfetch/global-apps-box/shared/test-utils';

import tasks-screen from '..';

describe('<tasks-screen /> props', () => {
    it('should render tasks-screen with default props', () => {
        const { container } = render(
            <tasks-screen />
        );

        expect(container).toMatchSnapshot();
    });
});
