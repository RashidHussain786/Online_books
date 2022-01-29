import { Grid, Typography } from '@mui/material';
import React from 'react';
import { styled} from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { HeroImage } from './HeroImage';

const HeroContainer= styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1),
    paddingRight:theme.spacing(1),
  },
  position: 'relative',
  pointerEvents: 'none',
  display: 'flex',
  marginBottom:'2.5rem'
}));

const useStyles = makeStyles({
  
  MainContainer:{
    paddingLeft:'16px',
    paddingRight:'16px',
    marginTop:'3rem',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'#68b0f4',
  height:'430px'
  },
  HeroContainer:{
    pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom:'2.5rem'
  }
});

export const Hero2 = () => {
  const classes =useStyles();
  return <>
      <Grid container className={classes.MainContainer}>
        <HeroContainer>
        <Grid container sx={{pr:'176px', pl:'176px'}} className={classes.HeroContainer}>
          {/*Heading */}
         <Grid item md={12}sx={{pt:'20px',py:'20px',textAlign:'center'}}>  
         <Typography
         variant='h4'
         sx={{pt:'1rem'}}
         >
           ALL THE BOOKS YOU LOOK FOR IN ONE PLACE
        </Typography>
           </Grid>
           {/* Image card */}
         <Grid item md={12} >   
          <HeroImage/>
           </Grid>
           
        </Grid>
        </HeroContainer>
      </Grid>
  </>;
};
