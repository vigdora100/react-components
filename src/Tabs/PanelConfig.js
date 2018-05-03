import { Component } from "react";
import PropTypes from "prop-types";

export default class PanelConfig extends Component {
  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    title: PropTypes.string,
    /** <a href="#view">See View</a> */
    tooltipPositioning: () => {}
    /* eslint-enable react/no-unused-prop-types */
  };

  render() {
    return null;
  }
}
