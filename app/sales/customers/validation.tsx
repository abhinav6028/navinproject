import * as Yup from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const customerSchema = Yup.object({

    name: Yup.string().required('customer name required').min(3, 'name should minimum 3 letters').max(10, 'name should be maximum 10 letters'),
    address: Yup.string().required('address required').min(10, 'address should minimum 10 letters').max(20, 'address should maximum 10 letters'),
    country: Yup.string().required("country required"),
    state: Yup.string().required("state required"),
    city: Yup.string().required("city required"),
    zip: Yup.number().required("zip code required"),
    email: Yup.string().required("email required").email('Not a proper email'),
    mobile: Yup.string().required("phone number required").matches(phoneRegExp, 'Phone number is not valid')
})