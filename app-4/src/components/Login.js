import React, {Component} from 'react';


class Login extends Component{
    constructor() {
        super();
        this.state={
            username: "",
            password: ""
        };

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUsernameChange(name) {
        this.setState({ username: name })
    }

    handlePasswordChange(pass) {
        this.setState({ password: pass })
    }

    handleLogin() {

    }

    render() {
        return (
          <div>
            <input type="text" placeholder="username" onChange={e=> this.updateUsername(e.target.value)}></input>
            <input type="password" onChange={e=> this.updatePassword(e.target.value)}></input>
            <button onClick={alert(`username: ${this.state.username}, Password: ${this.state.password}`)}>Login</button>
          </div>
        );
      }
    }
    
    export default Login;
}