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

  const [loadings, setLoadings] = React.useState<boolean[]>([]);

  const router = useRouter();

  const enterLoading = (index: number) => {


    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);

    router.push('customers/create')
  };


  return (

    <Grid container bgcolor="">

      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        loading={loadings[1]}
        onClick={() => enterLoading(1)}
      >
        Click me!
      </Button>

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
