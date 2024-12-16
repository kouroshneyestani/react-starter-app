import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationSchema } from "../../../schemas/validationSchema"; // Import the validation schema

const ProfileForm = () => {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
                address: "",
                terms: false,
            }}
            validationSchema={validationSchema} // Add validation schema
            onSubmit={(values) => {
                console.log(values); // Handle form submission (e.g., send to API)
            }}
        >
            {({ setFieldValue }) => (
                <Form>
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" name="name" id="name" />
                        <ErrorMessage name="name" component="div" className="error" />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" id="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" id="password" />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field type="password" name="confirmPassword" id="confirmPassword" />
                        <ErrorMessage name="confirmPassword" component="div" className="error" />
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <Field type="text" name="phone" id="phone" />
                        <ErrorMessage name="phone" component="div" className="error" />
                    </div>

                    {/* Address Field */}
                    <div>
                        <label htmlFor="address">Address</label>
                        <Field type="text" name="address" id="address" />
                        <ErrorMessage name="address" component="div" className="error" />
                    </div>

                    {/* Terms Checkbox */}
                    <div>
                        <label>
                            <Field type="checkbox" name="terms" />I accept the terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="div" className="error" />
                    </div>

                    {/* Submit Button */}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

function Page() {
    return (
        <div>
            <h1>Profile</h1>
            <ProfileForm />
        </div>
    );
}

export default Page;
