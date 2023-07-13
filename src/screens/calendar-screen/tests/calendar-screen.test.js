import React from 'react';

import { render } from '@farfetch/global-apps-box/shared/test-utils';

import calendar-screen from '..';

describe('<calendar-screen /> props', () => {
    it('should render calendar-screen with default props', () => {
        const { container } = render(
            <calendar-screen />
        );

        expect(container).toMatchSnapshot();
    });
});
