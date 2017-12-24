import expect from 'expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ReactOptions from '../src/';

Enzyme.configure({ adapter: new Adapter() });

const Details = (
  <div>
    <h3>Details</h3>
  </div>
);

const Children = (
  <div>
    <p>Children Data</p>
  </div>
);

const Component = (
  <ReactOptions key="1" id="1" optionsActive="0" details={Details}>
    {Children}
  </ReactOptions>
);

describe('ReactOptions component', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('renders children content', () => {
    const component = Enzyme.shallow(Component);
    expect(component.contains(Children)).toBeTruthy();
  });

  it('renders options content', () => {
    render(Component, node, () => {
      expect(node.innerHTML).toContain('Details');
    });
  });

  it('renders wrapper class for content', () => {
    render(Component, node, () => {
      expect(node.innerHTML).toContain('ro-wrapper');
    });
  });

  it('renders main class for content', () => {
    render(Component, node, () => {
      expect(node.innerHTML).toContain('ro-main');
    });
  });

  it('activates details class for options', () => {
    const component = Enzyme.shallow(Component);
    component.setProps({ optionsActive: '1' });
    expect(component.find('.ro-details_show').length).toBeTruthy();
  });

  it('deactivates details class for options', () => {
    const component = Enzyme.shallow(Component);
    component.setProps({ optionsActive: '1' });
    component.setProps({ optionsActive: '2' });
    expect(component.find('.ro-details_show').length).toBeFalsy();
  });
});
