import * as Yup from "yup";

// Validation schema using Yup for the form fields
export const validationSchema = Yup.object({
    name: Yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[@$!%*?&]/, "Password must contain at least one special character"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
    address: Yup.string().required("Address is required").min(5, "Address must be at least 5 characters"),
    terms: Yup.bool()
        .oneOf([true], "You must accept the terms and conditions")
        .required("You must accept the terms and conditions"),
});
