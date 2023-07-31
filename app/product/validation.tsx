import * as Yup from 'yup';

export const productSchema = Yup.object({

    code: Yup.string().required("PRODUCT CODE IS REQUIRED"),
    name: Yup.string().required('NAME IS REQUIRED').min(3, 'NAME SHOULD MINIMUM 3 LETTERS').max(10, 'NAME SHOULD MAXIMUM 10 LETTERS'),
    brand: Yup.string().required("BRAND NAME REQUIRED"),
    description: Yup.string().required("DESCRIPTION REQUIRED"),
    unit: Yup.number().required("UNIT REQUIRED"),
    tax_type: Yup.string().required("TAX TYPE REQUIRED"),
    tax_amount: Yup.number().required("TAX TYPE REQUIRED"),
    remarks: Yup.string().required("REMARKS REQUIRED"),
    category_id: Yup.string().required("................"),
    subCategorie: Yup.string().required("................"),

})    