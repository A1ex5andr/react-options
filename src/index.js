import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import './style.css';

class ReactOptions extends PureComponent {
  componentWillReceiveProps() {}

  render() {
    const { children, details, optionsActive, id } = this.props;
    const detailsStyle = className('ro-details', { 'ro-details_show': optionsActive === id });

    return (
      <div className="ro-wrapper">
        <div className="ro-main">{children}</div>
        <div className={detailsStyle}>{details}</div>
      </div>
    );
  }
}

export default ReactOptions;

ReactOptions.propTypes = {
  children: PropTypes.node.isRequired,
  details: PropTypes.node.isRequired,
  optionsActive: PropTypes.string,
  id: PropTypes.string.isRequired
};

ReactOptions.defaultProps = {
  optionsActive: null
};
