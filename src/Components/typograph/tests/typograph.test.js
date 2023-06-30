import React from 'react';

import { render } from '@farfetch/global-apps-box/shared/test-utils';

import typograph from '..';

describe('<typograph /> props', () => {
    it('should render typograph with default props', () => {
        const { container } = render(
            <typograph />
        );

        expect(container).toMatchSnapshot();
    });
});
