import { Box, Grid, Tab } from '@mui/material';
import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Adress from '../Customers/Adress';

export default function Tabs(props: any) {

    const { details, formik, tabName } = props;

    console.log("details", tabName);


    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Grid sx={{ typography: 'body1', mt: 4 }}>

            <TabContext value={value}>
                <Grid sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{
                        ".Mui-selected": {
                            bgcolor: '#1F51FF',
                            borderRadius: 3,
                            fontWeight: 600
                        },
                    }}>

                        {/* {
                            tabName.map((data, index) =>
                                <Tab key={index} sx={{ fontWeight: 600, color: '#000000' }} label={data} value={index} />
                            )
                        } */}
                        <Tab sx={{ fontWeight: 600, color: '#000000' }} label="Item One" value="1" />
                        <Tab sx={{ fontWeight: 600, color: '#000000' }} label="Item Two" value="2" />
                        <Tab sx={{ fontWeight: 600, color: '#000000' }} label="Item Three" value="3" />

                    </TabList>
                </Grid>

                <TabPanel value="1">
                    <Adress formik={formik} details={details} />
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>

            </TabContext>

        </Grid >
    )
}
