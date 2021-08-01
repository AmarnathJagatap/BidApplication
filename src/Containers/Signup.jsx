import React, { useState } from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

const Signup = ({ signup, isAuthenticated }) => {
    const paperStyle = { padding: '0 15px 40px 15px', width: 400, justifyContent: 'center', alignItems: 'center', }
    const btnStyle = { marginTop: 10, color: '#eee7df', backgroundColor: '#FF8C00', justifyContent: 'center', alignItems: 'center', alignContent: 'center', }
    const phoneRegExp = /^[2-9]{2}[0-9]{8}/
    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const initialValues = {
        name: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        password: '',
        re_password: '',
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        companyName: Yup.string().min(2, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
        phoneNumber: Yup.string().matches(phoneRegExp, "Enter valid Phone number").required("Required"),
        password: Yup.string().min(8, "Minimum characters should be 8")
            .matches(passwordRegExp, "Password must have one upper, lower case, number, special symbol").required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matches").required('Required'),
        selectOption: Yup.string().required('Required'),
    })

    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        password: '',
        re_password: ''
    });

    const { name, email, companyName, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(name, email, companyName, password, re_password);
            setAccountCreated(true);
        }
    };
    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    if (accountCreated) {
        return <Redirect to='/login' />
    }

    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='caption'>Fill the form to create an account</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form noValidate onSubmit={e => onSubmit(e)}>
                            {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> */}



                            <Field as={TextField} name='name' label='Name' fullWidth className="forminput"
                                error={props.errors.name && props.touched.name}
                                onChange={e => onChange(e)}
                                helperText={<ErrorMessage name='name' />} required />


                            <Field as={TextField} name='companyName' label='Company Name' fullWidth
                                error={props.errors.companyName && props.touched.companyName}
                                onChange={e => onChange(e)}
                                helperText={<ErrorMessage name='companyName' />} required />

                            {/* <TextField label='Email' name='email' type='Email' fullWidth 
                    {...props.getFieldProps('email')}/> */}

                            <Field as={TextField} name='email' label='Email' fullWidth
                                error={props.errors.email && props.touched.email}
                                onChange={e => onChange(e)}
                                helperText={<ErrorMessage name='email' />} required />

                            {/* <Field as={TextField} name="phoneNumber" label='Phone Number' fullWidth
                                error={props.errors.phoneNumber && props.touched.phoneNumber}
                                onChange={e => onChange(e)}
                                helperText={<ErrorMessage name='phoneNumber' />} required /> */}

                            <Field as={TextField} name='password' label='Password' type='password' fullWidth
                                error={props.errors.password && props.touched.password}
                                onChange={e => onChange(e)}
                                helperText={<ErrorMessage name='password' />} required />

                            <Field as={TextField} name='re_password' label='Confirm Password' type='password' fullWidth
                                error={props.errors.confirmPassword && props.touched.confirmPassword}
                                onChange={e => onChange(e)}
                                helperText={<ErrorMessage name='re_password' />} required />

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='primary' className="btn-get-started" onClick={e => onSubmit(e)}>Register</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);