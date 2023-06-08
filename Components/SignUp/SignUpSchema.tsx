import React from 'react';
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}/
//const TAX_NUMBER = //

export const SignUpSchema = Yup.object().shape({

    name: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(15).required(),

    tagline: Yup.string().required(),

    address: Yup.string().required(),

    mobile: Yup.string().matches(phoneRegExp, 'Invalid phone number').required("Required!"),

    email: Yup.string().min(3, 'Too Short!').email("Invalid email format").required("Required!"),

    tax_type: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid tax type').max(15).required(),

    tax_no: Yup.number().required(),

    username: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(15).required(),

    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})