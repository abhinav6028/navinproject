"use client";
import './globals.css'
import Header from '../Components/UI/Header/Header'
import { BASE_URL } from '../urls/urls'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SideBar from '../Components/UI/SideBar/SideBar';
import { Grid } from '@mui/material';
import SubSideBar from '../Components/UI/SideBar/SubSideBar';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const queryClient = new QueryClient();

  axios.defaults.baseURL = BASE_URL

  // const [click, setClick] = useState(true)

  return (
    <html lang="en">

      <body>

        <QueryClientProvider client={queryClient}>

          <Grid container>

            <SideBar />

            {/* <SubSideBar /> */}

            {children}

          </Grid>

        </QueryClientProvider>

      </body>

    </html>
  )
}
