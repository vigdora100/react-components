import styled from 'styled-components';
import Button from './Button';
import ButtonStyles from '@zendesk/garden-css-buttons';

const PrimaryButton = styled(Button).attrs({
    className: ButtonStyles['c-btn--primary']
})``;

/** @component */
export default PrimaryButton;
