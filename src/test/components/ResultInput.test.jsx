import React from 'react';
import { shallow } from 'enzyme';
import ResultInput from '../../components/ResultInput';

describe('ResultInput', () => {

    it('should contain ResultInput', () => {
        const wrapper = shallow(<ResultInput result={10} />);
        const expectedStr = '<input type="text" aria-label="10" class="calculator-screen" value="10" disabled=""/>'
        expect(wrapper.html()).toEqual(expectedStr);
    });
});

