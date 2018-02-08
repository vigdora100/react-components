import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ThemedComponent from "../ThemedComponent";
import Selectable from "../core/Selectable";

import styles from "./styles.css";

class LinkItem extends ThemedComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onMouseDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    role: PropTypes.string,
    selected: PropTypes.bool,
    testId: PropTypes.string,
    title: PropTypes.string,
    href: PropTypes.string.isRequired,
    selectedByMouse: PropTypes.bool,
    target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"])
  };

  static defaultProps = {
    disabled: false,
    role: "menuitem",
    target: "_self"
  };

  constructor(props, context) {
    super(props, context, {
      namespace: "Menu",
      styles
    });
  }

  render() {
    const {
      children,
      disabled,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onClick,
      role,
      selected,
      testId,
      href,
      target,
      className,
      selectedByMouse
    } = this.props;

    const { theme } = this;

    const accessibilityProps = {
      "aria-activedescendant": selected,
      "aria-disabled": disabled
    };

    return (
      <a
        {...accessibilityProps}
        className={classNames(theme.item, className, {
          [theme.disabled]: disabled,
          [theme.focused]: selected && !selectedByMouse,
          [theme.selected]: selected
        })}
        disabled={disabled}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        role={role}
        data-test-id={testId}
        href={href}
        target={target}
      >
        {children}
      </a>
    );
  }
}

export default Selectable(LinkItem, {
  action: (props, event) => {
    const { href, target } = props;
    const openInNewWindow = event.ctrlKey || event.metaKey;

    const newWindow = window.open(href, openInNewWindow ? "_blank" : target);
    if (newWindow) {
      newWindow.opener = null;
    }
  },
  selectEvent: "onClick",
  preventDefault: true
});
