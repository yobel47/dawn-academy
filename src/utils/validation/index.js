import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Email tidak valid")
    .matches(/[a-z0-9._-]+@[a-z0-9]+\.[a-z]/, "Email tidak valid")
    .required("Email harus ada"),
  password: yup
    .string()
    .trim()
    .min(8, "Password minimal 8 karakter")
    .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, "Password minimal 1 huruf besar, 1 huruf kecil, dan 1 angka")
    .required("Password harus ada"),
});
export const registerValidationSchema = yup.object().shape({
  name: yup.string().trim().required("Nama harus ada"),
  email: yup
    .string()
    .trim()
    .email("Email tidak valid")
    .matches(/[a-z0-9._-]+@[a-z0-9]+\.[a-z]/, "Email tidak valid")
    .required("Email harus ada"),
  password: yup
    .string()
    .trim()
    .min(8, "Password minimal 8 karakter")
    .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, "Password minimal 1 huruf besar, 1 huruf kecil, dan 1 angka")
    .required("Password harus ada"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password tidak sama")
    .required("Konfirmasi password harus ada"),
});
