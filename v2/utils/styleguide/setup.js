/**
 * Make certain components globally available in the Styleguide
 * without displaying in the sidebar
 */

// Styleguide components
import Grid from './Grid';
global.Grid = Grid;

// Garden components
import Chrome from '../../packages/chrome/src/index.js';

global.Garden = {
    Chrome
};

