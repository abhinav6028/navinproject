import * as Yup from 'yup';

export const SignUpSchema = Yup.object({

    name: Yup.string().required(" NAME REQUIRED"),
    taglin: Yup.string().required("TAGLINE REQUIRED"),
    address: Yup.string().required("ADRESS REQUIRED"),
    mobile: Yup.string().matches(/^[6-9]\d{9}$/, { message: "Please enter valid number.", excludeEmptyString: false }),
    email: Yup.string().email(),
    // tax_no: Yup.string().required("TAX NUMBER REQUIRED"),
    // username: Yup.string().required("TAX NUMBER REQUIRED"),
    // password: Yup.string().required("TAX NUMBER REQUIRED"),

})