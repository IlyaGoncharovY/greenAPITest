import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../bll/store/hook';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {loginTC} from '../../../bll/slices/auth-slice';
import {PATH} from '../../../utils/path/PATH';
import {Navigate} from 'react-router-dom';

export const LoginPage = () => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

    const formik = useFormik({
        initialValues: {
            idInstance: '',
            apiTokenInstance: '',
        },
        validationSchema: Yup.object().shape({
            idInstance: Yup.string()
                .required('Required'),
            apiTokenInstance: Yup.string()
                .min(4, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
        }),
        onSubmit: values => {
            dispatch(loginTC(values.idInstance, values.apiTokenInstance));
        },
    });

    if (isLoggedIn) {
        return <Navigate to={PATH.MAIN}/>;
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        type="idInstance"
                        id="idInstance"
                        placeholder="idInstance"
                        {...formik.getFieldProps('idInstance')}
                    />
                    {formik.touched.idInstance && formik.errors.idInstance ?
                        <div>{formik.errors.idInstance}</div> : null}
                </div>
                <div>
                    <input
                        type="apiTokenInstance"
                        id="apiTokenInstance"
                        placeholder="apiTokenInstance"
                        {...formik.getFieldProps('apiTokenInstance')}
                    />
                    {formik.touched.apiTokenInstance && formik.errors.apiTokenInstance ? (
                        <div>{formik.errors.apiTokenInstance}</div>
                    ) : null}
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

