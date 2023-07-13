import React from 'react';

import { render } from '@farfetch/global-apps-box/shared/test-utils';

import setting-screen from '..';

describe('<setting-screen /> props', () => {
    it('should render setting-screen with default props', () => {
        const { container } = render(
            <setting-screen />
        );

        expect(container).toMatchSnapshot();
    });
});
