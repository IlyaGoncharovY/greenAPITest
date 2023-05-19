import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../bll/store/hook';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {loginTC} from '../../../bll/slices/auth-slice';
import {PATH} from '../../../utils/path/PATH';
import {Navigate} from 'react-router-dom';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

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
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6}>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>idInstance</Form.Label>
                            <Form.Control
                                type="text"
                                id="idInstance"
                                placeholder="idInstance"
                                {...formik.getFieldProps('idInstance')}
                            />
                            {formik.touched.idInstance && formik.errors.idInstance && (
                                <div style={{ color: 'coral' }}>{formik.errors.idInstance}</div>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>apiTokenInstance</Form.Label>
                            <Form.Control
                                type="password"
                                id="apiTokenInstance"
                                placeholder="apiTokenInstance"
                                {...formik.getFieldProps('apiTokenInstance')}
                            />
                            {formik.touched.apiTokenInstance && formik.errors.apiTokenInstance && (
                                <div style={{ color: 'coral' }}>{formik.errors.apiTokenInstance}</div>
                            )}
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="success" type="submit">
                                Login
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

