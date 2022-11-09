import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function SignupForm(){
  return (
    <Formik
      initialValues={{email: '', passWord: ''}}
      validationSchema={Yup.object({
          email: Yup.string().email('write the email address correctly').required('Required'),
          passWord: Yup.string()
            .min(8, 'Must be 8 characters')
            .max(15, 'Must be under 15 characters')
            .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <br/>
        <label>Email Address</label>
        <Field name="email" type="email" /><br/>
        <ErrorMessage name="email" />
        <br/><br/>
        <label>passWord</label>
        <Field name="passWord" type="number" /><br/>
        <ErrorMessage name="passWord" />
        <br/><br/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
