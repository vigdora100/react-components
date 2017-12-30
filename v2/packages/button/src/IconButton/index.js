import styled from 'styled-components';
import Button from '../Button';
import ButtonStyles from '@zendesk/garden-css-buttons';

const IconButton = styled(Button).attrs({
    className: ButtonStyles['c-btn--icon']
})``;

/** @component */
export default IconButton;
