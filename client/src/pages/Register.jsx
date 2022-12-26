import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import { useMutation } from "@tanstack/react-query";

const Register = () => {
  const navigate = useNavigate();

  const { mutate: register } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => navigate("/login"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={yup.object({
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .required("Email is required")
          .email("Please enter a valid email address"),
        password: yup.string().required("Password is required"),
        passwordConfirm: yup
          .string()
          .required("Password is required")
          .oneOf([yup.ref("password")], "Passords must match"),
      })}
      onSubmit={(values) => register(values)}
    >
      <Form>
        <h1>Register</h1>
        <div className="">
          <label htmlFor="name">Name:</label>
          <Field id="name" name="name" type="text" />
          <ErrorMessage name="name" />
        </div>

        <div className="">
          <label htmlFor="email">Email:</label>
          <Field id="email" name="email" type="text" />
          <ErrorMessage name="email" />
        </div>

        <div className="">
          <label htmlFor="password">Password:</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage name="password" />
        </div>

        <div className="">
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <Field id="passwordConfirm" name="passwordConfirm" type="password" />
          <ErrorMessage name="passwordConfirm" />
        </div>

        <button type="submit">Register</button>
        <Link to="/login">Log in here</Link>
      </Form>
    </Formik>
  );
};

export default Register;
