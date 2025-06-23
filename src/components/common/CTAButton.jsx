import { Button, useTheme } from '@mui/material'
import React from 'react'

export default function CTAButton({name,border,hover}) {
    const theme=useTheme()
  return (
<Button variant='contained' sx={{
         backgroundColor: theme.palette.primary.secondary,
    border:border?border:"1px solid black",
    borderRadius:"50px",
    ":hover":hover?hover: {
        backgroundColor: 'transparent',
        border:border?border: `1px solid ${theme.palette.primary.secondary}`,
        color:'white',
       
    },
    padding:"10px 20px",
    color:'white'
}}> {name}</Button>
  )
}
