'use client'

import { Formik, Field, Form } from "formik";
import style from "./CartForm.modules.css"
import axios from 'axios';

const CartForm = () => {

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Requiredo';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {//chequea que sea un mail correcto
      error = 'Invalido';
    }
    return error;
  };

  const firstName = (value) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const lastName = (value) => {
    let error;
    if (value === '') {
      error = 'Requerido';
    }
    return error;
  };

  const validatePhone = (value) => {
    let error;
    if (!value) {
      error = 'Requerido';
    } else if (!/^\+?[0-9\s-]+$/.test(value)) {  // Solo permite números, espacios, signos + y -
      error = 'Número inválido';
    }
    return error;
  };

  const addContact = async (values) => {
    //console.log(JSON.stringify(values, 2, null))
    const data = {contactData: values}
    const response = await axios.post('/api/add-contact', values)
    console.log(response.data)
  }

  return (
    <div className="container-chk">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone:"",
        }}
        onSubmit={async (values) => {
          addContact(values)
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="form" noValidate>
          <div className="field-row">
            <div className="field-container">
              <label htmlFor="firstName">Nombre</label>
              <Field name="firstName" placeholder="Jane" validate={firstName} className="field"/>
              {errors.firstName && touched.firstName && <p className="error">*Completar</p>}
            </div>
            <div className="field-container">
              <label htmlFor="lastName">Apellido</label>
              <Field name="lastName" placeholder="Doe" validate={lastName} className="field"/>
              {errors.lastName && touched.lastName && <p className="error">*Completar</p>}
            </div>
          </div>

          <div className="field-container">
            <label htmlFor="phone">Phone</label>
            <Field name="phone" placeholder="+54 9 11 1234-5678" type="tel" validate={validatePhone} className="field" />
            {errors.phone && touched.phone && <p className="error">*Error de numero</p>}
          </div>

          <div className="field-container">
            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="jane@acme.com" type="email" validate={validateEmail} className="field"/>
            {errors.email && touched.email && <p className="error">*Completar con un email</p>}
          </div>

          <button type="submit" disabled={isSubmitting} className="submit-btn">
            ENVIAR
          </button>
        </Form>
        )}
      </Formik>
    </div>
  );
};

export default CartForm;