import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm, changeField, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../lib/api/auth';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user
    }));
    // input change eventHandler
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };

    //form register eventHandler
    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        //하나라도 비어 있다면
        if ([username, password, passwordConfirm].includes('')) {
            setError('Something empty');
            return;
        }
        if (password !== passwordConfirm) {
            setError('passwords are not equal');
            dispatch(changeField({ form: 'register', key: 'password', value: ''}));
            dispatch(changeField({ form: 'register', key: 'passwordConfirm', value: ''}));
            return ;
        }
        dispatch(register({ username, password }));
    };

    //when component is rendering at first, form init
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if(authError) {
            if (authError.response.status === 409) {
                setError('already exist ID');
                return;
            }
            console.log('Error');
            return;
        }
        if(auth) {
            console.log('register success');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if(user) {
            console.log('check API success')
            console.log(user);
            history.push('/')
        }
    }, [ user]);

    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(RegisterForm);