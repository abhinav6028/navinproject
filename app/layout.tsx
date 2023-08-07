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
import MobileHeader from '../Components/UI/Header/MobileHeader';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const queryClient = new QueryClient();

  axios.defaults.baseURL = BASE_URL

  const [gridSize, setGridSize] = useState(
    {
      sidebar: 2,
      layout: 10,
    }
  )

  return (

    <html lang="en">

      <body>

        <QueryClientProvider client={queryClient}>

          <Grid container sx={{ overflow: 'hidden' }}>

            <Header />

            <MobileHeader />

            <SideBar gridSize={gridSize} setGridSize={setGridSize} />


            <Grid md={gridSize.layout} container>

              <Grid container sx={{ justifyContent: 'center', bgcolor: '' }}>

                {children}

              </Grid>

            </Grid>

          </Grid>

        </QueryClientProvider>

      </body>

    </html>
  )
}
