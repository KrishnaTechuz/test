// component

import './login.css';

const Login = () => {
    return (
        <form style={{ padding: 20, margin: 20}}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <input type="password" id="pass" />
            </div>
            <button type="button">Submit</button>
        </form>
    )    
}

export default Login;