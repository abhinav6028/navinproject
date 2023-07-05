"use client";
import './globals.css'
import { BASE_URL } from '../urls/urls'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SideBar from '../Components/UI/SideBar/SideBar';
import { Grid } from '@mui/material';
import SubSideBar from '../Components/UI/SideBar/SubSideBar';
import { useState } from 'react';
import Header from '../Components/UI/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const queryClient = new QueryClient();

  axios.defaults.baseURL = BASE_URL

  const [click, setClick] = useState(false)

  console.log("layout", click);


  return (

    <html lang="en">

      <body>

        <QueryClientProvider client={queryClient}>

          <Grid container>

            <SideBar handleSideBar={click} />

            <Grid container bgcolor="red" lg={click ? 2 : 12 - 0.5}>
              hey
            </Grid>

            {/* <Header handleSideBar={click} /> */}

            {/* {children} */}

          </Grid>



        </QueryClientProvider>

      </body>

    </html>
  )
}
