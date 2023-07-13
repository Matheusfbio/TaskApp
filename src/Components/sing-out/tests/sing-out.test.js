import React from 'react';

import { render } from '@farfetch/global-apps-box/shared/test-utils';

import sing-out from '..';

describe('<sing-out /> props', () => {
    it('should render sing-out with default props', () => {
        const { container } = render(
            <sing-out />
        );

        expect(container).toMatchSnapshot();
    });
});
