import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });

  // it('should display 0 on initial render', () => {
  //   const display = shallow(<Display />);
  //   const value = display.find('div').children();
  //   console.log(Array.isArray(value))
  //   expect(value.text()).toEqual('0')
  // })
});