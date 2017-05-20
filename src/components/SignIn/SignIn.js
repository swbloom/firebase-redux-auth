import React from 'react';
import { auth, authProvider } from '../../services/firebase';


const SignIn = ({ signIn }) => (
    <button onClick={signIn}>Sign In</button>
)


export default SignIn;