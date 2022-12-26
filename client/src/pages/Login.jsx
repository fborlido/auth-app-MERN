import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { refetchUser } = useAuth();

  const { mutate: login } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => refetchUser(),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={yup.object({
        email: yup
          .string()
          .required("Email is required")
          .email("Please enter a valid email address"),
        password: yup.string().required("Password is required"),
      })}
      onSubmit={(values) => login(values)}
    >
      {({ errors, touched }) => (
        <Form className="grid place-items-center h-screen bg-slate-100">
          <div className="bg-white p-4 rounded-md shadow-md w-full max-w-md">
            <h1 className=" font-bold text-3xl mb-6">Log in</h1>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Email:</label>
              <Field
                id="email"
                name="email"
                type="text"
                className={`border-2 border-sky-500 rounded-md py-1 px-2 focus:outline-none focus:border-sky-800 ${
                  errors.email && touched.email && "border-rose-300"
                }`}
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-rose-400 text-sm"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="password">Password:</label>
              <Field
                id="password"
                name="password"
                type="password"
                className={`border-2 border-sky-500 rounded-md py-1 px-2 focus:outline-none focus:border-sky-800 ${
                  errors.password && touched.password && "border-rose-300"
                }`}
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-rose-400 text-sm"
              />
            </div>

            <button type="submit" className="btn w-full">
              Log in
            </button>
            <Link
              to="/register"
              className="block text-center mt-2 text-sky-600 underline text-sm"
            >
              Register here
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
