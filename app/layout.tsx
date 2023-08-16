"use client";
import './globals.css'
import { BASE_URL } from '../urls/urls'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Box, Divider, Grid } from '@mui/material';
import React from 'react';
import { usePathname } from 'next/navigation';
import { SideBar } from '../Components/UI/SideBar/SideBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const queryClient = new QueryClient();

  axios.defaults.baseURL = BASE_URL


  return (

    <html lang="en">

      <body>

        <QueryClientProvider client={queryClient}>


          <Box sx={{ width: "100%", display: "flex", backgroundColor: "white" }}>


              <SideBar />

                {children}

              </Box >

        

        </QueryClientProvider>

      </body>

    </html>
  )
}
