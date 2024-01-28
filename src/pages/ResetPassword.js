import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../features/user/userSlice";

const passwordSchema = Yup.object({
  password: Yup.string().required("Password is Required"),
});
const ResetPassword = () => {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, password: values.password }));
      navigate("/login");
    },
  });
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onCh={formik.handleChange("password")}
                  onBlr={formik.handleBlur("password")}
                  value={formik.values.password}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                  <button className="button border-0">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
