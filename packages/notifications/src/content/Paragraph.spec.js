import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './Paragraph';

it('should render default paragraph styling', () => {
  const wrapper = shallow(<Paragraph />)
  expect(wrapper).toMatchSnapshot();
});
