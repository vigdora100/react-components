import React from 'react';
import { shallow } from 'enzyme';
import Close from './Close';

it('should render default close styling', () => {
  const wrapper = shallow(<Close />)
  expect(wrapper).toMatchSnapshot();
});

describe('state', () => {
  it('should render focused styling correctly', () => {
    const wrapper = shallow(<Close focused />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should render hovered styling correctly', () => {
    const wrapper = shallow(<Close hovered />)
    expect(wrapper).toMatchSnapshot();
  });
});
