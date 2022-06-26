import React, { Component } from 'react';
import { auth, signInWithGoogle} from "./firebase";
class Login extends Component {

    constructor() {
        super();
    
        this.state = {
          currentUser: null
        };
      }
    
    unsubscribeFromAuth = null;

    componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user });
    });
    }

    componentWillUnmount() {
    this.unsubscribeFromAuth();
    }
    
    render() {
        return (
            <div>
               {
                this.state.currentUser ?
                (<div>
                    <div>Name: {this.state.currentUser.displayName}</div>
                    <div>Email: {this.state.currentUser.email}</div>
                    <button onClick={() => auth.signOut()}>LOG OUT</button>
                </div>
                ) :

                <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
                } 
            </div>
        );
    }
}

export default Login;