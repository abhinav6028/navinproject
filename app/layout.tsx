"use client";
import './globals.css'
import Header from '../Components/UI/Header/Header'
import { BASE_URL } from '../urls/urls'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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


          <Header />

          {children}

        </QueryClientProvider>

      </body>

    </html>
  )
}
