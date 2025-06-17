import { Button, useTheme } from '@mui/material'
import React from 'react'

export default function CTAButton({name}) {
    const theme=useTheme()
  return (
<Button variant='contained' sx={{
         backgroundColor: theme.palette.primary.secondary,
    border:"1px solid black",
    borderRadius:"50px",
    padding:"10px 20px",
    color:'white'
}}> {name}</Button>
  )
}
