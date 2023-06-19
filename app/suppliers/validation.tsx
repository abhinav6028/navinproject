import * as Yup from 'yup';

export const supplierValidation = Yup.object({


    company_name: Yup.string().min(3, 'NAME MUST BELONGS 3 CHARACTERS').max(25, 'NAME SHOULD MAXIMUM OF 25 CHARACTERS').required('COMPENY NAME IS REQUIRED'),
    address: Yup.string().required('ADRESS REQUIRED'),
    mobile: Yup.string().matches(/^\d{10}$/, 'ENTER VALID MOBILE NUMBER').required('MOBILE NUMBER REQUIRED'),
    email: Yup.string().email('MUST BE A VALID EMAIL').max(255).required('EMAIL IS REQUIRED'),
    tax_type: Yup.string().required('TAX TYPE IS REQUIRED'),
    tax_no: Yup.string().required('TAX NUMBER IS REQUIRED'),
    contact_person_name: Yup.string().min(3, 'NAME MUST BELONGS 3 CHARACTERS').max(25, 'NAME MAXIMUM OF 25 CHARACTERS').required('NAME IS REQUIRED'),
    contact_person_mobile: Yup.string().matches(/^\d{10}$/, 'ENTER VALID MOBILE NUMBER').required('MOBILE NUMBER REQUIRED'),

})