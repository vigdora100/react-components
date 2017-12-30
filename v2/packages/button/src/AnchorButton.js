import styled from 'styled-components';
import Button from './Button';
import ButtonStyles from '@zendesk/garden-css-buttons';

const AnchorButton = styled(Button).attrs({
    className: ButtonStyles['c-btn--anchor']
})``;

/** @component */
export default AnchorButton;
