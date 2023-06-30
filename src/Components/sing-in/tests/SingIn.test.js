import React from 'react';

import { render } from '@farfetch/global-apps-box/shared/test-utils';

import SingIn from '..';

describe('<SingIn /> props', () => {
    it('should render SingIn with default props', () => {
        const { container } = render(
            <SingIn />
        );

        expect(container).toMatchSnapshot();
    });
});
