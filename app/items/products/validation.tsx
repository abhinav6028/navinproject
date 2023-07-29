import * as Yup from 'yup';

export const productSchema = Yup.object().shape({

    code: Yup.string().required('product code required').min(2, 'code minimum 2 letters').max(7, 'code minimum 7 letters'),
    name: Yup.string().required('NAME IS REQUIRED').min(3, 'NAME SHOULD MINIMUM 3 LETTERS').max(10, 'NAME SHOULD MAXIMUM 10 LETTERS'),
    brand: Yup.string().required("BRAND NAME REQUIRED"),
    description: Yup.string().required("DESCRIPTION REQUIRED"),
    unit: Yup.number().required("UNIT REQUIRED"),
    tax_type: Yup.string().required("TAX TYPE REQUIRED").max(5,'tax type sholud minimum 4 letters'),
    tax_amount: Yup.number().required("TAX TYPE REQUIRED"),
    // category_id: Yup.string().required("................"),
    // subCategorie: Yup.string().required("................"),

})