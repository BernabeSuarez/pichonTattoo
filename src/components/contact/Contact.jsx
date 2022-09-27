import React from "react";
import { useFormik } from "formik";
import { Input, ErrorContainer } from "../UI/Input";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import {
  ContactContainer,
  FormContainer,
  StyledTextarea,
  Button,
} from "./contactElements";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Campo Requerido";
  } else if (values.name.length < 4) {
    errors.name = "El nombre debe tener mas de 4 caracteres";
  }

  if (!values.email) {
    errors.email = "Campo Requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Ingrese un mail valido";
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: async (values, onSubmitProps) => {
      try {
        const docRef = await addDoc(collection(db, "Contact Form"), {
          to: "bernatattoo@gmail.com",
          message: {
            subject: values.name,
            text: values.message,
          },
        });
        console.log(docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      onSubmitProps.resetForm();
    },
  });

  return (
    <ContactContainer>
      <FormContainer>
        <h2>Deja tu mensaje</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <Input
            id="name"
            type="text"
            placeholder="Tu Nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            showError={formik.errors.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorContainer>{formik.errors.name}</ErrorContainer>
          ) : null}
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Tu Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            showError={formik.errors.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorContainer>{formik.errors.email}</ErrorContainer>
          ) : null}
          <label htmlFor="message">Mensaje</label>
          <StyledTextarea
            id="message"
            placeholder="Tu mensaje..."
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <Button>Enviar</Button>
        </form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
