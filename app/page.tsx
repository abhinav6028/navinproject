"use client"
import { Grid, TextField } from '@mui/material'
import React from 'react'
import { IndexInfo } from 'typescript';

function page() {

  const [name, setName] = React.useState("");
  const [two, setTwo] = React.useState("");
  const [items, setItems] = React.useState([])

  console.log("items", items);


  const add = (e) => {

    e.preventDefault();

    console.log("//////////////", name, two);
    if (name && two) {
      const data = { name, two }

      setItems((itemList) => [...itemList, data])
      setName("")
      setTwo("")
    }

  }

  return (

    <Grid justifyContent="center" container>

      <Grid>

        <TextField name="one" value={name} onChange={(e) => setName(e.target.value)} label="Outlined" variant="outlined" />

        <TextField name="two" value={two} onChange={(e) => setTwo(e.target.value)} label="Outlined" variant="outlined" />

        <button onClick={add}>ADd</button>

      </Grid>

      {
        
        items.map((data: any, index: any) =>
          < div key={index} >
            <p>{data.name}</p>
            <p>{data.two}</p>
          </div>
        )

      }

    </Grid >
  )
}

export default page