import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const vendorsSchema = Yup.object({

    company_name: Yup.string().required('compeny name required'),
    address: Yup.string().required('address required'),
    mobile: Yup.string().required("phone number required").matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().required("email required").email('Not a proper email'),
    tax_type: Yup.string().required("TAX TYPE REQUIRED").max(5, 'tax type sholud minimum 4 letters'),
    tax_no: Yup.number().required('tax number required'),
    contact_person_name: Yup.string().required('sales man number required'),
    contact_person_mobile: Yup.string().required("phone number required").matches(phoneRegExp, 'Phone number is not valid'),

})