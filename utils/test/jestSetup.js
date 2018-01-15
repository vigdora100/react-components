// Setup enzyme's react adapter
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// Styled-Component setup
import 'jest-styled-components';
