import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const employeeShema = Yup.object({

    name: Yup.string().required('NAME IS REQUIRED').min(3, 'NAME SHOULD MINIMUM 3 LETTERS').max(10, 'NAME SHOULD MAXIMUM 10 LETTERS'),
    code: Yup.string().required('CODE IS REQUIRED'),
    address: Yup.string().required('CODE IS REQUIRED'),
    mobile: Yup.string()
        .matches(/^\d{10}$/, 'Invalid mobile number')
        .required('Mobile number is required'),


})