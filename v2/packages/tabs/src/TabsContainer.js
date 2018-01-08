import React, { PureComponent } from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
// import { SelectionContainer } from '@zendeskgarden/react-selection';
// import KeyboardContainer from './KeyboardContainer';
import SelectionContainer from './SelectionContainer';

export default class TabsContainer extends PureComponent {
  static propTypes = {
    id: PropTypes.string
  };

  static defaultProps = {
    id: `garden-tab-${uuid()}`
  };

  constructor(...args) {
    super(...args);

    this.state = {
      selectedItem: undefined,
      focusedIndex: undefined
    };
  }

  getTabPanelId = index => `${this.props.id}--tabpanel-${index}`;

  getTabContentProps = ({ item, index, role, ...other } = {}) => {
    if (typeof item === 'undefined') {
      throw new Error('"item" must be defined');
    }

    if (index === undefined) {
      this.items.push(item);
      index = this.items.length - 1;
    } else {
      this.items[index] = item;
    }

    const { selectedItem } = this.state;

    return {
      role: role || 'tabpanel',
      id: this.getTabPanelId(index),
      'hidden': selectedItem !== item,
      ...other
    };
  };

  getTabProps = ({ item, role, ...other } = {}) => {
    if (this.state.selectedItem === undefined && !this.getTabPropsCalled) {
      setTimeout(() => {
        this.setState({ selectedItem: item })
      }, 0);

      this.getTabPropsCalled = true;
    }

    return {
      role: role || 'tab',
      item,
      ...other
    };
  };

  getTabListProps = ({ role, ...other } = {}) => {
    return {
      role: role || 'tablist',
      ...other
    };
  };

  render() {
    const { children, id } = this.props;
    const { selectedItem, focusedIndex } = this.state;
    this.items = [];

    return (
      <SelectionContainer
        id={id}
        selectedItem={selectedItem}
        focusedIndex={focusedIndex}
        onStateChange={({ selectedItem, focusedIndex }) => this.setState({ focusedIndex, selectedItem })}>
        {({ getContainerProps, getItemProps, focusedIndex, selectedItem }) => children({
          getTabProps: props => getItemProps(this.getTabProps(props)),
          getTabListProps: props => getContainerProps(this.getTabListProps(props)),
          getTabContentProps: this.getTabContentProps,
          focusedIndex,
          selectedItem
        })}
      </SelectionContainer>
    );
  }
}
