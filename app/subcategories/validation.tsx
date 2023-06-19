import * as Yup from 'yup';

export const subCategorySchema = Yup.object({

    category_id: Yup.number().required('CATEGORY ID REQUIRED'),
    name: Yup.string().required('NAME REQUIRED'),
    description: Yup.string().required('DESCRIPTION REQUIRED'),

})