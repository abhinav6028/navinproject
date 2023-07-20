import { Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'
import FormHeader from '../Form/FormHeader'

export default function DetailPage(props: any) {

    const { overviewData } = props;

    const router = useRouter();

    

    //console.log(">>>>>>>>>>>>>>>>>>>>>>>>", id);


    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto' }} height="">

            <Grid container>
                <FormHeader type="edit" heading="Overview" />
            </Grid>

            {
                overviewData.map((data: any, index: any) =>

                    <Grid key={index} container sm={10} md={10} lg={11} sx={{ bgcolor: "", my: 0.6 }}>

                        <Grid sm={3.5} md={2} container bgcolor="" sx={{ alignItems: 'end' }}>
                            <Typography sx={{ ml: 'auto', mr: 2, fontSize: '1.2rem' }}>{data.fieldName} :</Typography>
                        </Grid>

                        <Grid sm={3.5} md={3.5} container bgcolor="">
                            <Typography sx={{ ml: 2, fontSize: '1.3rem', fontWeight: 550 }}>{data.value}</Typography>
                        </Grid>

                    </Grid>

                )
            }

        </Grid>


    )
}


// <Grid container justifyContent="center" >

//     <Grid container bgcolor="" lg={12} px={10} mt={3} sx={{ bgcolor: 'red', borderRadius: { xs: 0, lg: 3 }, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto', pb: 10 }}>

//         {/* <FormHeader type="edit" heading="Overview" /> */}

//         <Grid container sx={{ mt: 5 }} bgcolor="blue">

//             <Grid xs={5} sm={3} lg={3} bgcolor="blue">
//                 A
//             </Grid>

//             <Grid xs={5} sm={3} lg={3} bgcolor="green">
//                 A
//             </Grid>

//         </Grid>

//     </Grid>

// </Grid >

















// import { Grid, Typography } from '@mui/material'
// import { useRouter } from 'next/navigation';
// import React from 'react'
// import { ButtonEdit } from '../Button/Button';

// export default function DetailPage(props: any) {

//     const { finalData, fieledItems, fileName, id } = props;

//     console.log("finalData//////////", finalData?.category?.name);

//     const router = useRouter();



//     return (

//         <Grid container justifyContent="center">

//             <Grid container lg={11} sx={{ alignItems: 'center' }}>

//                 <Typography variant='h5' sx={{ fontWeight: 600 }}>OVERVIEW</Typography>

//                 <ButtonEdit fileName={fileName} id={id} />

//             </Grid>

//             <Grid container lg={11} sx={{
//                 bgcolor: '', mt: 5, pb: 1.6,
//                 boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
//             }}>

//                 {
//                     fieledItems.map((data: { fieledName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; itemName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) =>

//                         <Grid container key={index} sx={{
//                             mt: 1,
//                         }}>

//                             <Grid container lg={2}>

//                                 <Typography variant='h6' fontWeight="550" sx={{ ml: 3 }}>{data.fieledName}</Typography>
//                                 <Typography variant='h6' fontWeight="550" ml="auto" mr="5">:</Typography>

//                             </Grid>

//                             <Grid container lg={3} alignItems="center">

//                                 <Typography fontWeight="550" sx={{ ml: 2 }}>{data.itemName}</Typography>

//                             </Grid>

//                         </Grid>

//                     )
//                 }

//             </Grid>

//         </Grid >
//     )
// }
