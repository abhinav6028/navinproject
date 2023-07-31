import * as Yup from 'yup';

export const expencesSchema = Yup.object({
    amount: Yup.number()
        .min(1, 'The minimum amount is one')
        .typeError('The amount invalid')
        .required('The amount is required'),
})