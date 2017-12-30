import styled from 'styled-components';
import Button from './Button';
import ButtonStyles from '@zendesk/garden-css-buttons';

const PillButton = styled(Button).attrs({
    className: ButtonStyles['c-btn--pill']
})``;

/** @component */
export default PillButton;
