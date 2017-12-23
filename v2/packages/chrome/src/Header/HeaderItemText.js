import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import ChromeStyles from '@zendesk/garden-css-chrome';

const HeaderItemText = styled.div.attrs({
  className: props => classNames(ChromeStyles['c-chrome__body__header__item__text'], {
    [ChromeStyles['is-clipped']]: props.clipped
  })
})``;

HeaderItemText.propTypes = {
  /** Clip text (but leave accessible to screenreaders) for an icon-only header item */
  clipped: PropTypes.bool
};

/** @component */
export default HeaderItemText;
