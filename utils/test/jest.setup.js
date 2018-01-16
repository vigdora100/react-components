// Setup enzyme's react adapter
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// Add jest extension methods for jasmine
import 'jest-enzyme';

// Styled-Component setup
import 'jest-styled-components';


