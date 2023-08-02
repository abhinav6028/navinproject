/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid } from '@mui/material';
import { Button } from 'antd';
import React from 'react'
import ProductTable from '../../../Components/UI/TableUi/ProductTable';
import TableUi from '../../../Components/UI/TableUi/TableUi';
import { PoweroffOutlined } from "@ant-design/icons";
import { useRouter } from 'next/navigation';

function page() {

  const TABLE_HEAD = ["Customer Name", "Country", "State", "Mobile", "Mail"];

  const TABLE_CELL = ["name", "country", "state", "mobile", "email"];

  const router = useRouter();

  


  return (

    <Grid container bgcolor="">

      <TableUi

        heading="All Customers"

        TABLE_CELL={TABLE_CELL}

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="customers"

        fileName="sales/customers"

      />

    </Grid>

  )
}

export default page
