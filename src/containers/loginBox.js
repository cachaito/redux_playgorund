import { connect } from 'react-redux';
import loginBox from '../components/loginBox';
import loginUser from '../actions/loginUser';
import removeRedirection from '../actions/removeRedirection';

const mapStateToProps = (state, ownProps) => ({data: state});

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginType) => {
      dispatch(loginUser(loginType))
    },
    removeRedirection: () => {
      dispatch(removeRedirection())
    }
  }
}

const LoginBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginBox);

export default LoginBoxContainer;
