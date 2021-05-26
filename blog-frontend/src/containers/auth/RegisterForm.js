import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm, changeField, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../lib/api/auth';
import { withRouter } from 'react-router';

const RegisterForm = ({ history}) => {
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
        if (password !== passwordConfirm) {
            //TODO: 오류 처리
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
            console.log('Error');
            console.log(authError);
            return;
        }
        if(auth) {
            console.log('register success');
            console.log(auth);
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
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default withRouter(RegisterForm);