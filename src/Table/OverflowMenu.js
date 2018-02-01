import React from "react";
import ThemedComponent from "../utils/theming/ThemedComponent";
import PropTypes from "prop-types";
import classNames from "classnames";

import Button from "../Button";
import Menu from "../Menu";
import styles from "./styles.css";

export default class OverflowMenu extends ThemedComponent {
  static propTypes = {
    isFocusable: PropTypes.bool,
    children: PropTypes.node.isRequired,
    dir: PropTypes.oneOf(["ltr", "rtl"]),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    marginBottom: PropTypes.number,
    marginTop: PropTypes.number,
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    shouldClose: PropTypes.func
  };

  static defaultProps = {
    isFocusable: false,
    dir: "ltr"
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Table",
      styles
    });

    this.state = {
      isFocused: false
    };
  }

  render() {
    const { theme } = this;
    const {
      isFocusable,
      children,
      dir,
      onOpen,
      onClose,
      marginBottom,
      marginTop,
      maxHeight,
      shouldClose
    } = this.props;
    const { isFocused } = this.state;

    const trigger = (
      { open } // eslint-disable-line react/prop-types
    ) =>
      <Button.Core
        className={classNames(theme.overflow_menu, {
          [theme.is_focused]: isFocused && !open,
          [theme.is_active]: open
        })}
        onFocus={() => this.setState({ isFocused: true })}
        onBlur={() => this.setState({ isFocused: false })}
        tabIndex={isFocusable ? 0 : -1}
      >
        &nbsp;
      </Button.Core>;

    return (
      <Menu
        positioning={["bottom_left", "top_left"]}
        stretched
        trigger={trigger}
        dir={dir}
        onOpen={onOpen}
        onClose={onClose}
        marginBottom={marginBottom}
        marginTop={marginTop}
        maxHeight={maxHeight}
        shouldClose={shouldClose}
      >
        {children}
      </Menu>
    );
  }
}
