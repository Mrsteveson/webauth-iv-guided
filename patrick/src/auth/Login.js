import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: 'sam',
        password: 'pass',
    };


    render(){
        return(
            <div>
                <h3>Login Component</h3>
                <form onSubmit = {this.submitForm}>
                    <label htmlFor = 'username'/>
                    <input
                        id = 'username'
                        onChange = {this.handleChange}
                        value = {this.state.username}
                        type = 'text'
                    />

                    <label htmlFor = 'password' />
                    <input 
                        id = 'password'
                        onChange = {this.handleChange}
                        value = {this.state.password}
                        type = 'password'
                    />
                    <button type = 'submit'>Login</button>
                </form>
            </div>
        ) 
    }

    handleChange = event => {
        const { id , value } = event.target;

        this.setState({ [id]: value })
    }

    submitForm = event => {
        event.preventDefault();
        const endpoint = 'http://localhost:5000/api/auth/login';

        axios.post(endpoint, this.state)
        .then(res => {
            localStorage.setItem('jwt', res.data.token);
            this.props.history.push('/users');
        })
        .catch(err => {
            console.log('Login Error', err)
        })
    }
};




export default Login;