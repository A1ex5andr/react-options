import React, { PureComponent, Fragment } from 'react';
import { render } from 'react-dom';
import Logo from './svg/logo.svg';
import Chevron from './svg/chevron.svg';
import Remove from './svg/remove.svg';
import Data from './data';
import ReactOptions from '../../src';
import './index.css';

class Demo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      optionsActive: null
    };
  }

  componentWillReceiveProps() {}

  _showOptions = id => {
    this.setState({
      optionsActive: id
    });
  };

  _renderMainData = item => {
    const { id, title, founded, output, employees } = item;

    return (
      <div className="main main_content">
        <span className="main-id">{id}</span>
        <h4 className="main-title">{title} </h4>
        <p className="main-founded">{founded}</p>
        <p className="main-output">{output}</p>
        <p className="main-employees">{employees}</p>
        <div className="main-details" onClick={() => this._showOptions(id)}>
          <img src={Chevron} alt="chevron" />
        </div>
      </div>
    );
  };

  _renderDetails = item => {
    const { id, details } = item;

    return (
      <div className="details">
        <div className="details-close" onClick={() => this._closeItem()}>
          <img src={Chevron} alt="close" />
        </div>

        <div className="details-options">
          <a href={details.website} target="blank" className="details-options-web">
            website
          </a>
          <a href={details.facebook} target="blank" className="details-options-fb">
            facebook
          </a>
        </div>
        <div className="details-remove" onClick={() => this._removeItem(id)}>
          <img src={Remove} alt="remove" />
        </div>
      </div>
    );
  };

  _removeItem = id => {
    const newData = this.state.data.filter(i => i.id !== id);

    this.setState({
      data: newData
    });
  };

  _closeItem = () => this.setState({ optionsActive: null });

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <div className="description">
          <h1>React-Options Demo</h1>
        </div>

        <section>
          <div className="title">
            <img src={Logo} className="logo-react" alt="logo" />
            <h4>Component to toggle options with sliding effect</h4>
          </div>
          <div className="content">
            <header className="main">
              <span className="main-id">id</span>
              <h4 className="main-title">title </h4>
              <p className="main-founded">founded</p>
              <p className="main-output">output</p>
              <p className="main-employees">employees</p>
              <span className="main-details">details</span>
            </header>
            {data.map(item => (
              <ReactOptions
                key={item.id}
                id={item.id}
                optionsActive={this.state.optionsActive}
                details={this._renderDetails(item)}
              >
                {this._renderMainData(item)}
              </ReactOptions>
            ))}
          </div>
        </section>
      </Fragment>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
