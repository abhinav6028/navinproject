"use client"
import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { TextField, Grid } from '@mui/material';


export const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue]: any = useState([{ name: "", age: "" }]);

    console.log("Value", value)

    const onChange = (e: any, index: any, data: any) => {

        const newValues: any = [...value]

        newValues[index][data] = e.target.value

        setValue(newValues)

    }

    const add = (e: any, index: any,) => {

        setValue([...value, { id: value.length + 1, name: '' }])

    }

    const deleteTodo = (index: any) => {

        console.log(index);

    }

    return (

        <Grid>

            {value.map((data: any, index: any) =>

                <Grid key={index}>

                    <input type="text" onChange={(e) => onChange(e, index, "name")} />

                    <input type="text" onChange={(e) => onChange(e, index, "age")} />

                    <button onClick={() => deleteTodo(index)}>remove</button>

                </Grid>

            )}

            <button onClick={add}>add</button>

        </Grid>

    )
}

export default page