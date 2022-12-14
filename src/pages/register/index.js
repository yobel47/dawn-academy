import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { Benedetta, Zilong } from "../../assets";
import { CommonButton, InputPassword, InputText } from "../../components";
import Header from "../../components/header";
import { loginValidationSchema, registerValidationSchema } from "../../utils";

function Register() {
  return (
    <div className="w-full min-h-screen flex flex-col mx-auto items-center font-poppins">
      <Header />
      <div className="w-full flex-grow flex flex-col md:flex-row">
        <div className="w-full mx-auto  flex-shrink justify-center lg:max-w-7xl bg-[#0F3460]/60 md:flex hidden">
          <div className="flex justify-center">
            <img className="mt-16 max-w-[150%]" fill="black" src={Benedetta} alt="LoginImage" />
          </div>
        </div>
        <div className="w-full flex justify-center mx-auto lg:max-w-7xl flex-grow bg-white">
          <div className="flex flex-col self-center w-9/12">
            <Formik
              validationSchema={registerValidationSchema}
              initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, touched, values, errors, isValid }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mt-20">
                    <span className="font-poppinsSemibold text-3xl">Register</span>
                    <InputText
                      placeholder={"Nama"}
                      type={"text"}
                      name="name"
                      onChange={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                      error={errors.name && touched.name && errors.name}
                      message={errors.name}
                    />
                    <InputText
                      placeholder={"Email"}
                      type={"email"}
                      name="email"
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      error={errors.email && touched.email && errors.email}
                      message={errors.email}
                    />
                    <InputPassword
                      placeholder={"Password"}
                      name="password"
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      error={errors.password && touched.password && errors.password}
                      message={errors.password}
                    />
                    <InputPassword
                      placeholder={"Konfirmasi Password"}
                      name="password"
                      onChange={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      value={values.confirmPassword}
                      error={errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                      message={errors.confirmPassword}
                    />
                    <CommonButton
                      type="submit"
                      title="Masuk"
                      enabled={isValid && !errors.email && !errors.password && !errors.confirmPassword && touched}
                    />
                  </div>
                </form>
              )}
            </Formik>
            <div className="flex flex-col justify-center border-t-2 pt-4 border-t-black mb-8 w-3/4 self-center">
              <span className="font-poppinsMedium text-center w-100 ">Belum punya akun?</span>

              <span className="font-poppinsBold text-center w-100">
                <Link to={"../daftar"}>Daftar</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
