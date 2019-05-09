import React from 'react';
import axios from 'axios';

axios.interceptors.request.use(
    function(config) {
        config.headers.authorization = localStorage.getItem('jwt');

        return config;
    },

    function(error) {
        return Promise.reject();
    }
)

export default function(Component) {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('jwt');
            const notLoggedIn = <h3>Please login to see the users</h3>;

            return <div>{ token ? <Component {...this.props}/> : notLoggedIn }</div>
        }
    }
}