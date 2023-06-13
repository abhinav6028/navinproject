"use client"
import { Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import CreateButton from '../../Components/UI/Button/Button'
import TableUi from '../../Components/UI/TableUi/TableUi'

function page() {

  const TABLE_HEAD = ["NAME", "CODE", "ID", "DESCRIPTION", "CATEGORY ID"];

  const TABLE_CELL = ["name", "code", "id", "description", "category_id"];


  return (

    <Grid>


      <CreateButton path="/product/create">CREATE</CreateButton >

      <TableUi

        TABLE_CELL={TABLE_CELL}

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="products"

      />

    </Grid>

  )
}

export default page




















// "use client"


// import React from 'react'

// async function getData() {

//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

//     const headers = {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//     };

//     const res = await fetch('https://apierp.oyvaa.com/products', { headers });

//     const data = res.json();

//     return data

// }

// export default async function page() {

//     const data = getData();

//     console.log("@@@@@@@@@@", data);

//     return (
//         <Grid>page</Grid>
//     )
// }

// // export default page
// // import { Grid } from '@mui/material'
// // import React from 'react'
// // import TableUi from '../../Components/UI/TableUi/TableUi'

// // function page() {
// //     return (
// //         <Grid>

// //             <TableUi />

// //         </Grid>
// //     )
// // }

// // export default page