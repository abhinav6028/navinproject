"use client";
import './globals.css'
import { BASE_URL } from '../urls/urls'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Box, Divider, Grid } from '@mui/material';
import React from 'react';
import { usePathname } from 'next/navigation';
import { SideBar } from '../Components/UI/SideBar/SideBar';
import Header from '../Components/UI/Header/Header';
import Layout from '../Components/UI/Layout/Layout';

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

          {/* <Header /> */}
          <Layout>{children}</Layout>



        </QueryClientProvider>

      </body>

    </html>
  )
}
