import { Grid, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import React from 'react'
import { useQueryFetchById } from '../../hooks/useFetch';

export default function CustomDropDown(props: any) {

  const { fieldName, dropDownData, data, setData, type } = props;

  //console.log("dropDownData", dropDownData);

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value as string);
  };

  const path = usePathname();

  let parts = path.split("/");

  const one = useQueryFetchById('products', parts[3]).fetchedData

  //console.log("datasasasas", one.category.name);







  return (

    <Grid md={6} container sx={{ my: 1.5, alignItems: 'center', justifyContent: 'center' }}  >

      <Grid md={4} xs={12}  >

        <Typography variant='h6' sx={{ textAlign: { md: 'end', sm: 'start' } }}> {fieldName} : </Typography>

      </Grid>

      <Grid md={6} xs={12} sx={{ ml: { md: 4, sm: 1 }, mt: { md: 3, sm: 1 }, bgcolor: '' }}>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{type == "edit" ? one?.category?.name : fieldName}</InputLabel>
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