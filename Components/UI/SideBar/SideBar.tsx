import { Box, Grid } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SubSideBar from './SubSideBar';

export default function SideBar() {

    const [click, setClick] = React.useState(false);

    return (
        <Grid container lg={click ? 1.7 : 0.5} bgcolor="" sx={{ justifyContent: 'center', flexDirection: 'column' }}>

            <Grid container sx={{ justifyContent: 'center' }}>

                <Box sx={{ m: 1, justifyContent: 'center', width: 'fit-content' }}>

                    {
                        click ? <ArrowBackIcon onClick={() => setClick(!click)} sx={{ fontSize: 40, cursor: 'pointer' }} />
                            : <ArrowForwardIcon onClick={() => setClick(!click)} sx={{ fontSize: 40, cursor: 'pointer' }} />

                    }

                </Box>

            </Grid>


            {click ? <SubSideBar /> : null}

        </Grid>
    )
}

































// import React from 'react';
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

// export default function SideBar() {
//     return (
//         <div>
//             <Sidebar>
//                 <Menu>
//                     <SubMenu label="Charts">
//                         <MenuItem> Pie charts </MenuItem>
//                         <MenuItem> Line charts </MenuItem>
//                     </SubMenu>
//                     <MenuItem> Documentation </MenuItem>
//                     <MenuItem> Calendar </MenuItem>
//                 </Menu>
//             </Sidebar>
//         </div>
//     )
// }









// // import { Box, Grid } from '@mui/material'
// // import { useRouter } from 'next/navigation'
// // import React from 'react'
// // import { H6 } from '../Typography/Typography'
// // import { sideBarItems } from './helpers'

// // function SideBar() {

// //     const router = useRouter();

// //     return (
// //         <Grid container md={2} lg={2} bgcolor="red" justifyContent="center">

// //             <Box
// //                 component="img"
// //                 sx={{
// //                     height: 33,
// //                     width: 95,
// //                     mt: { lg: 4, md: 3 },
// //                     cursor: 'pointer'
// //                 }}
// //                 alt="logo"
// //                 src="/assets/logo/logo.png"
// //             />

// //             <Grid container justifyContent="center" sx={{ mt: { lg: 8 } }}>

// //                 {
// //                     sideBarItems.map((data, index) =>

// //                         <Grid key={index} container lg={11.5} bgcolor="blue"
// //                             onClick={() => router.push(data.path)}
// //                             sx={{
// //                                 justifyContent: "center", borderRadius: 4,
// //                                 cursor: 'pointer', my: 0.5
// //                             }}>

// //                             <H6>{data.name}</H6>

// //                         </Grid>
// //                     )
// //                 }

// //             </Grid>

// //         </Grid >
// //     )
// // }

// // export default SideBar