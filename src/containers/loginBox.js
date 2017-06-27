import { connect } from 'react-redux';
import loginBox from '../components/loginBox';
import loginUser from '../actions/auth';
import history from '../history';

const mapStateToProps = (state, ownProps) => ({data: state});

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginType) => {
      dispatch(loginUser(loginType))
        .then(() => {
          console.log('success login');
        }, (err) => {
          history.push('/');
        });
    }
  }
}

const LoginBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginBox);

export default LoginBoxContainer;
