import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

const isBottom = props => props['data-placement'] && props['data-placement'].indexOf('top') !== -1;
const isTop = props => props['data-placement'] && props['data-placement'].indexOf('bottom') !== -1;

const Menu = styled.div.attrs({
  className: props => classNames(MenuStyles['c-menu'])
})`
  :focus {
    outline: none;
  }

  && {
    margin-top: ${props => isBottom(props) ? '4' : '0'}px;
    margin-bottom: ${props => isTop(props) ? '4' : '0'}px;
  }

  ${props => retrieveTheme('menu.menu', props)}
`;

/** @component */
export default Menu;
