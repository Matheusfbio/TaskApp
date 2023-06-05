import React from 'react';

import { render } from '@farfetch/global-apps-box/shared/test-utils';

import CheckBox from '..';

describe('<CheckBox /> props', () => {
    it('should render CheckBox with default props', () => {
        const { container } = render(
            <CheckBox />
        );

        expect(container).toMatchSnapshot();
    });
});
