import { connect } from 'react-redux';
import loginBox from '../components/loginBox';
import loginUser from '../actions/loginUser';

const mapStateToProps = (state, ownProps) => ({data: state});

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginType) => {
      dispatch(loginUser(loginType))
    }
  }
}

const LoginBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginBox);

export default LoginBoxContainer;
