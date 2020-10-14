import { loginAPI } from '../api/api';
import axios from 'axios';

export default {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        // axios.post('http://127.0.0.1:8000/api/login', { email: username, password: password })
        // .then(res => {
        //     console.log(`response::`)
        //     console.log(res);
        // })
        
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://127.0.0.1:8000/api/invoice/index', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        localStorage.setItem('username', username);
        // accept all username/password combinations
        return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};