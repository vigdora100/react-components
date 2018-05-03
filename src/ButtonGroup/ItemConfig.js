import { Component } from "react";
import PropTypes from "prop-types";

export default class ItemConfig extends Component {
  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.node,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired
    /* eslint-enable react/no-unused-prop-types */
  };

  render() {
    return null;
  }
}
