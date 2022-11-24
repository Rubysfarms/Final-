import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik";

import { loginFormFields } from "./fields";
import { signInRequestCreator } from "../../reducers/loginFormActionCreators";


const LoginForm = () => {
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        dispatch(signInRequestCreator(values));
    };
    const initialValues = {
        "email": "",
        "password": "",
        "submit": "Sign in",
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, "Min 6!").required('Required'),
    })

    const formikProps = {
        initialValues,
        onSubmit,
        validationSchema,
    }

    return (
        <Formik { ...formikProps } >
            <Form>
                <Field { ...loginFormFields.email } />
                <ErrorMessage name={loginFormFields.email.name} />

                <Field { ...loginFormFields.password } />
                <ErrorMessage name={loginFormFields.password.name} />

                <Field { ...loginFormFields.submit } />
            </Form>
        </Formik>
    )
}

export default LoginForm;