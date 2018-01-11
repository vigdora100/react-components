import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import MenuStyles from '@zendesk/garden-css-menus';
import { retrieveTheme } from 'garden-react-theming';

const Separator = styled.div.attrs({
  className: classNames(MenuStyles['c-menu__separator'])
})`
  ${props => retrieveTheme('menu.separator', props)}
`;

/** @component */
export default Separator;
