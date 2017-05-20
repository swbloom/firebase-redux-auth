import { connect } from 'react-redux';
import App from '../components/App/App.js';
import { signIn, signOut } from '../actions/auth.js';

const mapStateToProps = ({ auth }) => {
    return { auth };
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        signIn() {
            dispatch(signIn());
        },
        signOut() {
            dispatch(signOut());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);