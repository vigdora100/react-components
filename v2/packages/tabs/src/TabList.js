import styled from 'styled-components';
import classNames from 'classnames';
import TabStyles from '@zendesk/garden-css-tabs';
import { utils } from '@zendeskgarden/react-theming';

const TabList = styled.ul.attrs({
  className: props => classNames(TabStyles['c-tab__list'], {
    [TabStyles['is-rtl']]: utils.isRtl(props)
  })
})`
  :focus {
    outline: none;
  }

  ${props => utils.retrieveTheme('tabs.tab_list', props)}
`;

/** @component */
export default TabList;
