"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

function page() {

  const router = useRouter();
  
  const { id } = useParams();

  console.log("id", id);



  return (
    <div>edit page</div>
  )
}

export default page