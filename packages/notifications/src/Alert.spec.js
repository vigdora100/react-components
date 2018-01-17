import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

it('should render alert styling', () => {
  const wrapper = shallow(<Alert />)
  expect(wrapper).toMatchSnapshot();
});

describe('validation', () => {
  it('should render success styling correctly', () => {

  });

  it('should render warning styling correctly', () => {

  });

  it('should render error styling correctly', () => {

  });
});
