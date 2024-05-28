import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';

const UserSignup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      gender: '',
      email: '',
      education: '',
      interest: '',
      paymentType: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      axios.post('http://localhost:5000/api/signup/user', values)
        .then(response => {
          alert('Signup successful');
        })
        .catch(error => {
          console.error('There was an error signing up!', error);
        });
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <TextField label="Name" {...formik.getFieldProps('name')} />
        <TextField label="Age" type="number" {...formik.getFieldProps('age')} />
        <TextField label="Gender" {...formik.getFieldProps('gender')} />
        <TextField label="Email" type="email" {...formik.getFieldProps('email')} />
        <TextField label="Education" {...formik.getFieldProps('education')} />
        <TextField label="Interest" {...formik.getFieldProps('interest')} />
        <TextField label="Payment Type" {...formik.getFieldProps('paymentType')} />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default UserSignup;
