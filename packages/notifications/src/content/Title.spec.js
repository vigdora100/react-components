import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

it('should render default title styling', () => {
  const wrapper = shallow(<Title />)
  expect(wrapper).toMatchSnapshot();
});
