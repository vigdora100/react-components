/** @component */
export default function retrieveTheme(componentId, props) {
  const styles = props.theme.styles;

  if (!styles) {
    return;
  }

  const componentStyles = styles[componentId];
  if (typeof componentStyles === 'function') {
    return componentStyles(props);
  }

  return componentStyles;
}
