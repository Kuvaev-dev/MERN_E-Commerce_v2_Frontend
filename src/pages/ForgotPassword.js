import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { forgotPasswordToken } from "../features/user/userSlice";

const emailSchema = Yup.object({
  email: Yup.string()
    .email("E-mail Should be Valid")
    .required("E-mail is Required"),
});
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      dispatch(forgotPasswordToken(values));
    },
  });
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We'll send you an email to reset your password
              </p>
              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  onCh={formik.handleChange("email")}
                  onBlr={formik.handleBlur("email")}
                  value={formik.values.email}
                />
                <div className="error text-center">
                  {formik.touched.email && formik.errors.email}
                </div>
                <div className="mt-3 d-flex justify-content-center flex-column align-items-center gap-15">
                  <button className="button border-0" type="submit">
                    Submit
                  </button>
                  <Link to="/login">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPassword;
