"use client"
import { Grid, Typography } from '@mui/material'
import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function page() {

    const data = [
        {
            heading: 'Business Overview',
            subItems: ["Profit and Loss", "Profit and Loss (Schedule III)", "Horizontal Profit and Loss", " Cash Flow Statement", " Balance Sheet", "Horizontal Balance Sheet", "Balance Sheet (Schedule III)"]
        },
        {
            heading: ' Sales',
            subItems: ["Sales by Customer", "Sales by Item", "Sales by Sales Person"]
        },
        {
            heading: 'Inventory',
            subItems: ["Inventory Summary", "Inventory Valuation Summary", " FIFO Cost Lot Tracking", " Product Sales Report",]
        },
        {
            heading: 'Receivables',
            subItems: ["Customer Balances", "Aging Summary", "Aging Details", "Invoice Details", "Retainer Invoice Details", "Sales Order Details", "Delivery Challan Details", "Estimate Details"]
        },
        {
            heading: 'Payments Received',
            subItems: ["Payments Received", "Time to Get Paid", "Credit Note Details", "Refund History"]
        },
        {
            heading: 'Recurring Invoices',
            subItems: ["Recurring Invoice Details"]
        },
        {
            heading: ' Payables',
            subItems: ["Vendor Balances", "Aging Summary", "Aging Details", "Bills Details", "Vendor Credits Details", "Payments Made", "Refund History", "Purchase Order Details", "Purchase Orders by Vendor"]
        },
        {
            heading: 'Purchases and Expenses',
            subItems: ["Purchases by Vendor", "Purchases by Item", "Expense Details", "Expenses by Category", "Expenses by Customer", "Expenses by Project", "Expenses by Employee"]
        },
        {
            heading: 'Taxes',
            subItems: ["Tax Summary", "TDS Summary", "GSTR - 3B Summary", "Summary of Outward Supplies", "Summary of Inward Supplies", "Self Invoice Summary", "Annual Summary(GSTR - 9)", "Overseas Digital Tax Summary"]
        },
        {
            heading: ' Projects and Timesheet',
            subItems: ["Project Summary", "Project Details", "Timesheet Details"]
        },
        {
            heading: ' Projects and Timesheet',
            subItems: ["Account Transactions", "Account Type Summary", "Account Type Transactions", "Day Book", "General Ledger", "Detailed General Ledger", "Journal Report", "Trial Balance"]
        },
    ]


    return (

        <Grid container sx={{ bgcolor: '', justifyContent: 'center' }}>

            <Grid container sx={{ mt: 4, p: 3 }}>

                {
                    data.map((item, index) =>

                        <Grid key={index} container sx={{ bgcolor: '', height: 'fit-content' }} lg={3}>

                            <Typography sx={{ width: '100%', fontSize: '1.3rem' }}>  <StarBorderIcon />  {item.heading}</Typography>

                            <Grid sx={{ mt: 1 }}>

                                {
                                    item?.subItems.map((item, index) =>
                                        <Typography key={index} sx={{
                                            width: '100%', ml: 3, py: 0.1, color: '#6666ff', cursor: 'pointer',
                                            fontSize: { md: '1rem' }
                                        }}> {item}</Typography>
                                    )
                                }

                            </Grid>

                        </Grid>

                    )
                }

            </Grid>

        </Grid>
    )
}

export default page