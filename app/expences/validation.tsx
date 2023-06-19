import * as Yup from 'yup';

export const expeneceSchema = Yup.object({

    category: Yup.string().required('CATEGORY REQUIRED'),
    description: Yup.string().required('CATEGORY REQUIRED')



})