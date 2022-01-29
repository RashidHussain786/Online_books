import { CardMedia } from '@mui/material';
import React from 'react';

export const HeroImage = () => {
  return <>
<CardMedia
      sx={{objectFit:'fill',pt:'2rem'}}
              component="img"
              height='250px'
              image="/Assets/home-4.svg"
              alt="picture of home-1"
            />

  </>;
};
