import { Box, Grid, Tab } from '@mui/material';
import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Adress from '../Customers/Adress';
import OtherDetails from '../Customers/OtherDetails';

export default function Tabs(props: any) {

    const { details, otherDetails, formik, tabName } = props;

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Grid sx={{ typography: 'body1', mt: 4 }}>

            <TabContext value={value}>
                <Grid sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{
                        ".Mui-selected": { bgcolor: '#1F51FF', borderRadius: 3, fontWeight: 600 },
                    }}>

                        {/* {
                            tabName.map((data, index) =>
                                <Tab key={index} sx={{ fontWeight: 600, color: '#000000' }} label={data} value={index} />
                            )
                        } */}
                        <Tab sx={{ fontWeight: 600, color: '#000000' }} label="Address" value="1" />
                        <Tab sx={{ fontWeight: 600, color: '#000000' }} label="Other Details" value="2" />

                    </TabList>

                    <TabPanel value="1">
                        <Adress formik={formik} details={details} />
                    </TabPanel>
                    <TabPanel value="2">
                        <OtherDetails formik={formik} otherDetails={otherDetails} />
                    </TabPanel>

                </Grid>



            </TabContext >

        </Grid >
    )
}
