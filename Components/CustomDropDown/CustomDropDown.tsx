import { Grid, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react'
import { useQueryFetchById } from '../../hooks/useFetch';

export default function CustomDropDown(props: any) {

  const { fieldName, dropDownData, data, setData, type, drop } = props;

  //console.log("dropDownData", dropDownData);

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value as string);
  };

  const path = usePathname();

  let parts = path.split("/");

  const one = useQueryFetchById('products', parts[3]).fetchedData



  return (

    <Grid md={8} container sx={{ alignItems: 'center', justifyContent: 'start', my: 2 }}  >


      <Grid container justifyContent="start" md={3} xs={12} sx={{ bgcolor: '' }} >

        <Typography variant='h6' sx={{ textAlign: { md: 'end', sm: 'start' } }}> {fieldName} : </Typography>

      </Grid>

      <Grid md={8} xs={12}
      // sx={{ ml: { md: 4, sm: 1 } }}
      >
        {/* {type == "edit" ? one?.category?.name : fieldName} */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{drop}</InputLabel>
          <Select
            sx={{ width: { xs: '100%', md: '100%' }, height: 40 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data}
            label="fieldName"
            onChange={handleChange}
          >

            {
              dropDownData?.map((item: any, index: any) => {

                return (
                  <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                )

              })
            }

          </Select>
        </FormControl>

      </Grid>
    </Grid >

  );
}