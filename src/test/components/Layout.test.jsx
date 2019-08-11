import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout';

describe('Layout', () => {

    it('should contain ResultInput', () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.find('ResultInput').exists()).toEqual(true);
    });

    it('should call ResultInput component with props result', () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.find('ResultInput').props()).toEqual({"result": ""});
    });

    it('should contain 17 buttons', () => {
        const wrapper = shallow(<Layout />);
        expect(wrapper.find('Button').length).toEqual(17);
    });
});

