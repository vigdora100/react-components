import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithTheme } from 'utils';

import Well from './Well';

it('should render default well styling', () => {
  const wrapper = shallow(<Well />)
  expect(wrapper).toMatchSnapshot();
});

it('should apply RTL styling styling if applied', () => {
  const wrapper = shallowWithTheme(<Well />, true);
  expect(wrapper).toMatchSnapshot();
});

describe('validation', () => {
  it('should render success styling correctly', () => {
    const wrapper = shallow(<Well success />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should render warning styling correctly', () => {
    const wrapper = shallow(<Well warning />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should render error styling correctly', () => {
    const wrapper = shallow(<Well error />)
    expect(wrapper).toMatchSnapshot();
  });
});
