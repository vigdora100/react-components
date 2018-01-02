/**
 * Make certain components globally available in the Styleguide
 * without displaying in the sidebar
 */

// Styleguide components
import Grid from './Grid';
global.Grid = Grid;

// Garden components
import * as Button from '../../packages/button';
import * as Chrome from '../../packages/chrome';
import * as Form from '../../packages/form';
import * as Input from '../../packages/input';
import * as Selection from '../../packages/selection';
import * as Theming from '../../packages/theming';

global.Garden = {
    Button,
    Chrome,
    Form,
    Input,
    Selection,
    Theming
};

