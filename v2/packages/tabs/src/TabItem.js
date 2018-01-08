// import React, { PureComponent } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import TabStyles from '@zendesk/garden-css-tabs';
import { utils } from '@zendeskgarden/react-theming';
import Selection from './Selection';

const TabItem = styled.li.attrs({
  className: props => classNames(TabStyles['c-tab__list__item'], {
    [TabStyles['is-hovered']]: props.hovered,
    [TabStyles['is-focused']]: props.focused,
    [TabStyles['is-active']]: props.active,
    [TabStyles['is-disabled']]: props.disabled,
    [TabStyles['is-selected']]: props.selected,
  })
})`
  ${props => utils.retrieveTheme('tabs.tab_list.item', props)};
`;

/** @component */
export default Selection(TabItem);
