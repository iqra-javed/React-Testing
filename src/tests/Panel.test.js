import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('should render five rows of buttons', () => {
    const panel = shallow(<Panel />);
    const displayPanel = panel.find('.component-panel');
    expect(displayPanel.children().length).toEqual(5)
  })

});