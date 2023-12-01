import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Minimum length is 2 characters")
    .matches(/^[A-Za-z\s]+$/, "Wrong Fullname")
    .required("Please fill in"),
  email: Yup.string()
    .email("Wrong Email")
    .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, "Wrong Email")
    .required("Please fill in"),

  tel: Yup.string()
    .required("Enter a phone number")
    .matches(/^(\+380|0)[3-9][0-9]\d{7}$/, "Wrong Phone"),
  message: Yup.string(),
});
