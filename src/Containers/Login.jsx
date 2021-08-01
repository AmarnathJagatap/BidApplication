import React, { useState } from 'react';
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';


const Login = ({ login, isAuthenticated }) => {
    const paperStyle = { padding: '0 15px 40px 15px', width: 400, }
    const btnStyle = { marginTop: 10, color: '#fff', backgroundColor: "#FF8C00", }
    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const initialValues = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Enter valid email").required("Required"),

        password: Yup.string().min(8, "Minimum characters should be 8")
            .matches(passwordRegExp, "Password must have one upper, lower case, number, special symbol").required('Required'),
    })
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    if (isAuthenticated) {
        return <Redirect to='/' />
    }


    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='caption'>Login Here</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form noValidate>
                            {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> */}

                            <Field as={TextField} name='email' label='Email' fullWidth
                                error={props.errors.email && props.touched.email}
                                onChange={e => onChange(e)}
                                value={email}
                                helperText={<ErrorMessage name='email' />} required />

                            <Field as={TextField} name='password' label='Password' type='password' fullWidth
                                error={props.errors.password && props.touched.password}
                                value={password}
                                onChange={e => onChange(e)}
                                helperText={<ErrorMessage name='password' />} required />

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='primary' className="btn-get-started" onClick={e => { onSubmit(e) }}>Login</Button>
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

export default connect(mapStateToProps, { login })(Login);
