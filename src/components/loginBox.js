import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { LOGIN_WITH_GOOGLE } from '../constants';

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {lalke: 'ddddd'};
    this._submit = this._submit.bind(this);
  }

  _submit(ev) {
    ev.preventDefault();

    console.log(`event: ${ev.type}`);
    if (ev.type === 'click') {
      this.props.loginUser(ev.target.name);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let { redirectTo } = this.props.data;
      
    if (redirectTo === true) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    let { redirectTo } = this.props.data;
    
    redirectTo = false;
  }

  render() {
    let { isLoading, error, redirectTo } = this.props.data;
    let { title } = this.props;

    return (
      <div className="login-box-wrapper">
        <form id="login-box">
          <h2>Login</h2>
          <button className="btn btn-primary" disabled={isLoading} name={LOGIN_WITH_GOOGLE} onClick={this._submit} id="google-api">{title}</button>
        </form>
        {error && <h3>Error occured</h3>}
      </div>
    );
  }
}

LoginBox.defaultProps = {
  title: 'Loguj z Google!'
};

LoginBox.propTypes = {
  loginUser: React.PropTypes.func.isRequired
};

export default LoginBox;
