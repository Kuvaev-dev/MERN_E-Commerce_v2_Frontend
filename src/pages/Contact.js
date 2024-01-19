import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillHome } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Container from "../components/Container";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createQuery } from "../features/contact/contactSlice";

const contactSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("E-mail Should be Valid")
    .required("E-mail is Required"),
  mobile: Yup.string().required("Mobile is Required"),
  comment: Yup.string().required("Comment is Required"),
});
const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      dispatch(
        createQuery({
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          comment: values.comment,
        })
      );
    },
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="home-wrapper-2 py-5 contact-wrapper">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1319.020649788332!2d34.5620127754597!3d48.60905272802708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1703684144002!5m2!1suk!2sua"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                      value={formik.values.name}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.name && formik.errors.name}
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.email && formik.errors.email}
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile"
                      name="mobile"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                  <div>
                    <textarea
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comment"
                      name="comment"
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                      value={formik.values.comment}
                    ></textarea>
                  </div>
                  <div className="error">
                    {formik.touched.comment && formik.errors.comment}
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in Touch with Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiFillHome className="fs-5" />
                      <address className="mb-0">Some Address</address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoCall className="fs-5" />
                      <a href="tel:+38 066 666 66 66">+38 066 666 66 66</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <TbMailFilled className="fs-5" />
                      <a href="mailto:ecommerce@gmail.com">
                        ecommerce@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsFillInfoCircleFill className="fs-5" />
                      <p className="mb-0">Monday - Friday, 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
