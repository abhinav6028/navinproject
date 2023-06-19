import * as Yup from 'yup';

export const categorySchema = Yup.object({

    category: Yup.string().required('CATEGORY NAME REQUIRED'),
    description: Yup.string().required('DESCRIPTION REQUIRED'),


})