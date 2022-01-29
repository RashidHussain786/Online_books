import { CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

export const Testinomial2 = () => {
  return <>
<CardMedia
      sx={{objectFit:'fill',pt:'2rem'}}
              component="img"
              height='300px'
              image="/Assets/home-6.svg"
              alt="picture of home-1"
            />
         <Grid item sx={{pt:'2rem'}}>   
        <Typography
        variant='subtitle1'
        textAlign='center'
        fontFamily='cursive'
        >
          Buy the books you're looking for from your phone or PC
          </Typography> 
          </Grid> 
  </>;
};
