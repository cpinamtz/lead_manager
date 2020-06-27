import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {

  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name)
        /* It uses .join due to error messages
        comes from backend as an array of only
        one string*/
        alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.name)
        alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.deleteLead)
        alert.success(message.deleteLead);
      if (message.addLead)
        alert.success(message.addLead);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStatetoProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStatetoProps)(withAlert()(Alerts));