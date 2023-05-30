import React from "react";
import { useFormik } from "formik";
import { postRobots } from "../api/requests";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";


const AddRobot = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    await postRobots(values);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${values.name} posted successfully!`,
      showConfirmButton: false,
      timer: 1500
    })

    actions.resetForm();
    navigate('/robots');

  };

  const UserValidation = yup.object().shape({
    name: yup.string().required("name is required"),
    desc: yup.string().required("name is required"),
    imageURL: yup
      .string()
      .required("image is required"),
  });


  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
      imageURL: "",
    },
    validationSchema: UserValidation,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <form style={{ marginTop: "20vh" }} onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Enter name"
          type="text"
          name="name"
        />
        {formik.errors.name && formik.touched.name && (
          <span>{formik.errors.name}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          placeholder="Enter desc"
          type="text"
          name="desc"
        />
        {formik.errors.desc && formik.touched.desc && (
          <span>{formik.errors.desc}</span>
        )}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageURL}
          placeholder="Enter image"
          type="url"
          name="imageURL"
        />
        {formik.errors.imageURL && formik.touched.imageURL && (
          <span>{formik.errors.imageURL}</span>
        )}
        <button
          disabled={Object.keys(formik.errors).length !== 0 ? true : false}
          type="submit"
        >
          Add New Users
        </button>
      </form>
    </>
  );
};

export default AddRobot;