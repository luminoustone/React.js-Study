import client from './clicent';

//login
export const login = ({ username, password }) =>
    client.post('/api/auth/login', { username, password });

//register
export const register = ({ username, password}) =>
    client.post('/api/auth/register', { username, password});

//check login state
export const check = () => client.get('/api/auth/check');