import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../api/posts";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => navigate("/"),
  });

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Create a new Post</h1>
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        validationSchema={yup.object({
          title: yup
            .string()
            .required("Please provide a title")
            .min(10, "Title is too short"),
          content: yup
            .string()
            .required("Please provide the content")
            .min(10, "Story is too short... :("),
        })}
        onSubmit={(values) => mutate(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="flex flex-col mb-4">
              <label htmlFor="title">Title:</label>
              <Field
                id="title"
                name="title"
                type="text"
                placeholder="Crazy Title"
                className={`border border-sky-500 rounded-md py-1 px-2 focus:border-2 focus:outline-none ${
                  errors.title && touched.title && "border-rose-400"
                }`}
              />
              <ErrorMessage
                name="title"
                className="text-rose-400"
                component="p"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="content">Content:</label>
              <Field
                as="textarea"
                rows="5"
                id="content"
                name="content"
                type="text"
                placeholder="My crazy story..."
                className={`border border-sky-500 rounded-md py-1 px-2 focus:border-2 focus:outline-none ${
                  errors.title && touched.title && "border-rose-400"
                }`}
              />
              <ErrorMessage
                name="content"
                className="text-rose-400"
                component="p"
              />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewPost;
