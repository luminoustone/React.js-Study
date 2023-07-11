import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { initializeForm, changeField, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../lib/api/auth';

const LoginForm = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));
    // input change eventHandler
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    //form register eventHandler
    const onSubmit = e => {
        e.preventDefault();
        const { username, password } = form;
        dispatch(login({username, password}));
    };

    //when component is rendering at first, form init
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log('Error');
            console.log(authError);
            setError('login fail...')
            return;
        }
        if (auth) {
            console.log('login success');
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [history, user]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(LoginForm);