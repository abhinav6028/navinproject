"use client"
import { Grid } from '@mui/material'
import React from 'react'
import CreateButton from '../../Components/UI/Button/Button';
import TableUi from '../../Components/UI/TableUi/TableUi';

function page() {

    const TABLE_HEAD = ["NAME", "CATEGORY ID", "DESCRIPTION"];

    const TABLE_CELL = ["name", "category_id", "description"];


    return (

        <Grid>


            <CreateButton path="/subcategories/create">CREATE</CreateButton >

            <TableUi

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="sub-categories"

            />

        </Grid>

    )
}

export default page