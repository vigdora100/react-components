import styled from 'styled-components';
import Button from './Button';
import ButtonStyles from '@zendesk/garden-css-buttons';

const BasicButton = styled(Button).attrs({
    className: ButtonStyles['c-btn--basic']
})``;

/** @component */
export default BasicButton;
