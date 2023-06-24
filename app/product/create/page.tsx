/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import useBearerToken from '../../../hooks/useBearerToken'
import { BASE_URL } from '../../../urls/urls';
import { useFormik } from 'formik';
import { Grid, Typography, TextField, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { BackButton } from '../../../Components/UI/Button/Button';
import { useQueryFetch } from '../../../hooks/useFetch';

function page() {

    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const { fetchedData } = useQueryFetch('categories');

    const subCategories = useQueryFetch('sub-categories').fetchedData


    console.log("subCategories", subCategories);

    const [categoryId, setCategoryId] = React.useState('');

    // console.log('categoryId', categoryId);

    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategoryId(event.target.value as string);
    };

    const [subCategoryId, setSubCategoryId] = React.useState('')

    console.log('subCategoryId', subCategoryId);

    const handleChangeSubCategory = (event: SelectChangeEvent) => {
        setSubCategoryId(event.target.value as string);
    };









    const formik = useFormik({

        initialValues: {

            code: '',
            name: '',
            brand: '',
            description: '',
            unit: '',
            category_id: '',
            subcategory_id: '',
            tax_type: '',
            tax_amount: '',

        },

        //validationSchema: employeeShema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}products`, {

                code: values.code,
                name: values.name,
                brand: values.name,
                description: values.description,
                unit: values.unit,
                category_id: categoryId,
                subcategory_id: subCategoryId,
                tax_type: values.tax_type,
                tax_amount: values.tax_amount,

            },

                {
                    headers
                }

            ).then((res: any) => {
                console.log('api succesfull');
                console.log(res);
            })

        },

    });

    const formItems = [
        {
            textFieldName: 'code',
            id: 'code',
            name: 'code',
            type: "text",
            value: formik.values.code,
            touched: formik.touched.code,
            errors: formik.errors.code

        },
        {
            textFieldName: 'name',
            id: 'name',
            name: 'name',
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name
        },
        {
            textFieldName: 'values.brand',
            id: 'values.brand',
            name: 'brand',
            type: "text",
            value: formik.values.brand,
            touched: formik.touched.brand,
            errors: formik.errors.brand
        },
        {
            textFieldName: 'description',
            id: 'description',
            name: 'description',
            type: "text",
            value: formik.values.description,
            touched: formik.touched.description,
            errors: formik.errors.description
        },
        {
            textFieldName: 'unit',
            id: 'unit',
            name: 'unit',
            type: "number",
            value: formik.values.unit,
            touched: formik.touched.unit,
            errors: formik.errors.unit
        },
        {
            textFieldName: 'tax_type',
            id: 'tax_type',
            name: 'tax_type',
            type: "number",
            value: formik.values.tax_type,
            touched: formik.touched.tax_type,
            errors: formik.errors.tax_type
        },
        {
            textFieldName: 'tax_amount',
            id: 'tax_amount',
            name: 'tax_amount',
            type: "number",
            value: formik.values.tax_amount,
            touched: formik.touched.tax_amount,
            errors: formik.errors.tax_amount
        },

    ]


    return (

        <Grid container justifyContent="center">

            <BackButton />

            <Grid container justifyContent="center" bgcolor="" lg={8} px={10} mt={3}
                sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>

                <form onSubmit={formik.handleSubmit}>




                    <Grid container my={3}>

                        <Grid alignItems="center" width={200} display="flex"  >

                            <Typography variant='h6' fontWeight="550">Category  </Typography>
                            <Typography variant='h6' fontWeight="550">:</Typography>

                        </Grid>

                        <Grid sx={{ minWidth: 120 }}>

                            <FormControl >
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>

                                <Select sx={{ width: 400 }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={categoryId}
                                    label="Category"
                                    onChange={handleChangeCategory}
                                >
                                    {
                                        fetchedData?.map((data: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: any) =>

                                            <MenuItem key={index} value={data.id}>{data.name}</MenuItem>

                                        )
                                    }

                                </Select>
                            </FormControl>

                        </Grid>

                    </Grid>

                    <Grid container   >

                        <Grid alignItems="center" width={200} display="flex"  >

                            <Typography variant='h6' fontWeight="550">Sub Category </Typography>
                            <Typography variant='h6' fontWeight="550">:</Typography>

                        </Grid>

                        <Grid sx={{ minWidth: 120 }}>

                            <FormControl >
                                <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>

                                <Select sx={{ width: 400 }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={subCategoryId}
                                    label="Sub Category"
                                    onChange={handleChangeSubCategory}
                                >
                                    {
                                        subCategories?.map((data: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: any) =>

                                            <MenuItem key={index} value={data.id}>{data.name}</MenuItem>

                                        )
                                    }

                                </Select>
                            </FormControl>

                        </Grid>

                    </Grid>






























                    {

                        formItems.map((data, index) =>

                            <Grid container key={index} my={3}>

                                <Grid alignItems="center" width={200} display="flex"  >

                                    <Typography variant='h6' fontWeight="550"> {data.textFieldName}  </Typography>
                                    <Typography variant='h6' fontWeight="550">:</Typography>

                                </Grid>

                                <Grid bgcolor="">

                                    <TextField sx={{ width: 400 }}
                                        //variant="standard"
                                        label={data.textFieldName}
                                        id={data.id}
                                        name={data.name}
                                        type={data.type}
                                        onChange={formik.handleChange}
                                        value={data.value}
                                        error={data.touched && Boolean(data.errors)}
                                        helperText={data.touched && data.errors}
                                        onBlur={formik.handleBlur}
                                    />

                                </Grid>

                            </Grid>

                        )

                    }



                    <Grid container justifyContent="flex-end">

                        <Button type="submit" sx={{
                            bgcolor: '#5dbea3',
                            mb: 2,
                            "&:hover": {
                                backgroundColor: 'rgb(7, 177, 77, 0.42)'
                            }
                        }}>

                            <Typography sx={{
                                px: 1.5, py: 1,
                                cursor: 'pointer',
                                color: 'black',
                            }}>CREATE</Typography>

                        </Button>

                    </Grid>


                </form>

            </Grid >

        </Grid >

    )
}

export default page















// "use client"
// import { Button, FormControl, Grid, TextField, Typography, InputLabel, Select, MenuItem, Box, SelectChangeEvent } from '@mui/material';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react'
// import { BackButton } from '../../../Components/UI/Button/Button';
// import useBearerToken from '../../../hooks/useBearerToken';
// import { useQueryFetch } from '../../../hooks/useFetch';
// import { BASE_URL } from '../../../urls/urls';
// import { productSchema } from '../validation';


// export default function CreateProduct() {

//     const router = useRouter();

//     const token = useBearerToken()

//     const headers = {

//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',

//     };

//     const { fetchedData } = useQueryFetch('categories');

//     //console.log('fetchedData', fetchedData);


//     const subCategories = useQueryFetch('sub-categories').fetchedData

//     const [category, setCategory] = React.useState('');

//     //console.log('category', category);


//     const selectCategory = (event: SelectChangeEvent) => {
//         setCategory(event.target.value as string);
//     };

//     const [subCategorie, setSubCategorie] = React.useState('');

//     const selectSubCategory = (event: SelectChangeEvent) => {
//         setSubCategorie(event.target.value as string);
//     };

//     const formik = useFormik({

//         initialValues: {
//             code: '',
//             category_id: '',
//             subcategory_id: '',
//             name: '',
//             brand: '',
//             description: '',
//             unit: '',
//             tax_type: '',
//             tax_amount: '',
//             remarks: ''
//         },

//         validationSchema: productSchema,

//         onSubmit: values => {

//             axios.post(`${BASE_URL}products`, {

//                 category_id: category,
//                 subcategory_id: subCategorie,
//                 code: values.code,
//                 name: values.name,
//                 brand: values.brand,
//                 description: values.description,
//                 unit: values.unit,
//                 tax_type: values.tax_type,
//                 tax_amount: values.tax_amount,
//                 remarks: values.remarks

//             },

//                 {
//                     headers
//                 }

//             ).then((res: any) => {

//                 router.push('/product')

//             })

//         },



//     });

//     const formItems = [
//         {
//             textFieldName: 'CODE',
//             id: 'code',
//             name: 'code',
//             type: "text",
//             value: formik.values.code,
//             touched: formik.touched.code,
//             errors: formik.errors.code
//         },
//         {
//             textFieldName: 'NAME',
//             id: 'name',
//             name: 'name',
//             type: "text",
//             value: formik.values.name,
//             touched: formik.touched.name,
//             errors: formik.errors.name
//         },
//         {
//             textFieldName: 'BRAND',
//             id: 'brand',
//             name: 'brand',
//             type: "text",
//             value: formik.values.brand,
//             touched: formik.touched.brand,
//             errors: formik.errors.brand
//         },
//         {
//             textFieldName: 'DESCRIPTION',
//             id: 'description',
//             name: 'description',
//             type: "text",
//             value: formik.values.description,
//             touched: formik.touched.description,
//             errors: formik.errors.description
//         },
//         {
//             textFieldName: 'UNIT',
//             id: 'unit',
//             name: 'unit',
//             type: "number",
//             value: formik.values.unit,
//             touched: formik.touched.unit,
//             errors: formik.errors.unit
//         },
//         {
//             textFieldName: 'TAX TYPE',
//             id: 'tax_type',
//             name: 'tax_type',
//             type: "text",
//             value: formik.values.tax_type,
//             touched: formik.touched.tax_type,
//             errors: formik.errors.tax_type
//         },
//         {
//             textFieldName: 'TAX AMOUNT',
//             id: 'tax_amount',
//             name: 'tax_amount',
//             type: "number",
//             value: formik.values.tax_amount,
//             touched: formik.touched.tax_amount,
//             errors: formik.errors.tax_amount
//         },
//         {
//             textFieldName: 'REMARKS',
//             id: 'remarks',
//             name: 'remarks',
//             type: "text",
//             value: formik.values.remarks,
//             touched: formik.touched.remarks,
//             errors: formik.errors.remarks
//         },
//     ]


//     return (

//         <Grid container justifyContent="center" alignItems="center" >

//             <BackButton />

//             <Grid container justifyContent="center" bgcolor="" lg={8} px={10}
//                 sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>

//                 <form onSubmit={formik.handleSubmit}>

//                     <Grid container my={3}>

//                         <Grid alignItems="center" width={200} display="flex"  >

//                             <Typography variant='h6' fontWeight="550"> CATEGORY  </Typography>
//                             <Typography variant='h6' fontWeight="550">:</Typography>

//                         </Grid>

//                         <Grid>

//                             <FormControl sx={{ width: 400 }}>

//                                 <InputLabel id="demo-simple-select-label">Category</InputLabel>

//                                 <Select
//                                     labelId="demo-simple-select-label"
//                                     id="demo-simple-select"
//                                     value={category}
//                                     label="category"
//                                     onChange={selectCategory}
//                                 >
//                                     {
//                                         fetchedData?.map((data: any, index: any) =>

//                                             <MenuItem key={index} value={data.id}>{data.name}</MenuItem>

//                                         )
//                                     }

//                                 </Select>

//                             </FormControl>

//                         </Grid>


//                     </Grid>

//                     <Grid container my={3}>

//                         <Grid alignItems="center" width={200} display="flex"  >

//                             <Typography variant='h6' fontWeight="550"> SUB CATEGORY  </Typography>
//                             <Typography variant='h6' fontWeight="550">:</Typography>

//                         </Grid>



//                         <Grid>

//                             <FormControl sx={{ width: 400 }}>

//                                 <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>

//                                 <Select
//                                     labelId="demo-simple-select-label"
//                                     id="demo-simple-select"
//                                     value={subCategorie}
//                                     label="sub category"
//                                     onChange={selectSubCategory}
//                                 //onClick={() => setCategoryId(data.id)}
//                                 >
//                                     {
//                                         subCategories?.map((data: any, index: any) =>

//                                             <MenuItem key={index} value={data.id}>{data.name}</MenuItem>

//                                         )
//                                     }

//                                 </Select>

//                             </FormControl>

//                         </Grid>


//                     </Grid>

//                     {

//                         formItems.map((data, index) =>

//                             <Grid container key={index} my={3}>

//                                 <Grid alignItems="center" width={200} display="flex"  >

//                                     <Typography variant='h6' fontWeight="550"> {data.textFieldName}  </Typography>
//                                     <Typography variant='h6' fontWeight="550">:</Typography>

//                                 </Grid>

//                                 <Grid bgcolor="">

//                                     <TextField sx={{ width: 400 }}
//                                         //variant="standard"
//                                         label={data.textFieldName}
//                                         id={data.id}
//                                         name={data.name}
//                                         type={data.type}
//                                         onChange={formik.handleChange}
//                                         value={data.value}
//                                         error={data.touched && Boolean(data.errors)}
//                                         helperText={data.touched && data.errors}
//                                         onBlur={formik.handleBlur}
//                                     />

//                                 </Grid>

//                             </Grid>

//                         )

//                     }

//                     <Grid container justifyContent="flex-end">

//                         <Button type="submit" sx={{
//                             bgcolor: '#5dbea3',
//                             mb: 2,
//                             "&:hover": {
//                                 backgroundColor: 'rgb(7, 177, 77, 0.42)'
//                             }
//                         }}>

//                             <Typography sx={{
//                                 px: 1.5, py: 1,
//                                 cursor: 'pointer',
//                                 color: 'black',
//                             }}>CREATE</Typography>

//                         </Button>

//                     </Grid>


//                 </form>

//             </Grid>

//         </Grid>

//     )
// }