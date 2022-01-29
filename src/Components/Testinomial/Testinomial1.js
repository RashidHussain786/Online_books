import { CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

export const Testinomial1 = () => {
  return <>
<CardMedia
      sx={{objectFit:'fill',pt:'2rem'}}
              component="img"
              height='300px'
              image="/Assets/home-5.svg"
              alt="picture of home-1"
            />
           <Grid item sx={{pt:'2rem'}}>
            <Typography
        variant='subtilte1'
        textAlign='centre'
        fontFamily='cursive'
        >
          Download samples in PDF or EPUB of your favorite books
          </Typography> 
          </Grid>
  </>;
};
