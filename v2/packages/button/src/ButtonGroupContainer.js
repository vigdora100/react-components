import React from 'react';
import PropTypes from 'prop-types';
import { SelectionContainer } from '@zendeskgarden/react-selection';

const getButtonProps = ({ tabIndex, ...other }) => {
    return {
        tabIndex: tabIndex || -1,
        ...other
    };
};

const ButtonGroupContainer = ({ children, selectedIndex, onSelection }) => (
    <SelectionContainer
        selectedIndex={selectedIndex}
        onSelection={onSelection}
        highlightOnFocus>
        {({ getContainerProps, getItemProps, highlightedIndex, selectedIndex }) => (
            children({
                getButtonGroupProps: getContainerProps,
                getButtonProps: props => getButtonProps(getItemProps(props)),
                highlightedIndex,
                selectedIndex
            })
        )}
    </SelectionContainer>
);

ButtonGroupContainer.propTypes = {
    children: PropTypes.func,
    selectedIndex: PropTypes.number,
    onSelection: PropTypes.func
};

export default ButtonGroupContainer;
