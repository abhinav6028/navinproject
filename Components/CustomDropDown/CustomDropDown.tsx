import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

export default function CustomDropDown(props: any) {

  const { fieldName } = props;

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (

    <Grid md={5} container alignItems="end" bgcolor="" >

      <Grid md={4} sx={{ bgcolor: '' }} >

        <Typography variant='h6' fontWeight="bold" textAlign="end"> {fieldName} : </Typography>

      </Grid>

      <Grid md={6} sx={{ ml: 4, mt: 2, bgcolor: '' }}>

        <FormControl fullWidth>

          <Select
            sx={{ width: '100%', height: 40 }}
            labelId="demo-simple-select-label"
            placeholder="Costomer Name"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

      </Grid>

    </Grid>
  )
}
