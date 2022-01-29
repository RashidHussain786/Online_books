import { CardMedia } from '@mui/material';
import React from 'react';

export const RightHero1 = () => {
  return <>
      <CardMedia
      sx={{objectFit:'fill'}}
              component="img"
              height='300px'
              image="/Assets/home-1.svg"
              alt="picture of home-1"
            />
  </>;
};
