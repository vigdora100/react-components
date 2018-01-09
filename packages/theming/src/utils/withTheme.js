import { withTheme as styledWithTheme } from 'styled-components';

/** @component */
export default function withTheme(WrappedComonent) {
  return styledWithTheme(WrappedComonent);
};
