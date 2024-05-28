import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';

const EmployerSignup = () => {
  const formik = useFormik({
    initialValues: {
      companyName: '',
      location: '',
      contactInfo: '',
      interestType: '',
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required('Required'),
      contactInfo: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      axios.post('http://localhost:5000/api/signup/employer', values)
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
        <TextField label="Company Name" {...formik.getFieldProps('companyName')} />
        <TextField label="Location" {...formik.getFieldProps('location')} />
        <TextField label="Contact Info" type="email" {...formik.getFieldProps('contactInfo')} />
        <TextField label="Interest Type" {...formik.getFieldProps('interestType')} />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default EmployerSignup;
