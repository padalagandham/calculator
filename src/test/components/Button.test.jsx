import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('Button', () => {

    it('should contain ResultInput', () => {
        const wrapper = shallow(<Button classname={'testClass'} val={'10'} content={'11'} action={()=> {}} />);
        const expectedStr = '<button type="button" aria-label="11" class="testClass" value="10">11</button>'
        expect(wrapper.html()).toEqual(expectedStr);
    });
});

