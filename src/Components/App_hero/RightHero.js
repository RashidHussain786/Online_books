import { CardMedia, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  
    Container1:{
      paddingLeft:'15px',
      paddingRight:'15px',
      
    },

});
export const RightHero = () => {
   const classes=useStyles();
  return <>
 <Grid item md={12} className={classes.Container1}>
            <CardMedia
              component="img"
              width='100'
              height='auto'
              image="/Assets/Main-apresentation.svg"
              alt="picture of hero"
            />
          </Grid>
  </>;
};
