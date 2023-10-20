import React, {Component} from 'react';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="login-container">
                <div className="login-box">
                    <form>
                        <h1>Login</h1>
                        <div className="input-box">
                            <fieldset>
                                <legend>Email</legend>  
                                <input type="text" placeholder="Enter your email" name="email" required/>
                            </fieldset>
                        </div>
                        <div className="input-box">
                            <fieldset>
                                <legend>Password</legend>                                
                                <input type="password" placeholder="Enter your password" name="email" required/>                               
                            </fieldset>
                        </div>
                        

                        <div className="button">
                            <button type="submit">Login</button>
                        </div>
                        <p>New to website? <br/><a href="#">Register</a></p>
                    </form>              
                </div>
            </div>
          
         );
    }
}
 
export default Login;