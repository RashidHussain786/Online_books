import { Grid } from '@mui/material';
import React from 'react';
import { styled} from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { LeftHero } from './LeftHero';
import { RightHero } from './RightHero';


const HeroContainer= styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1),
    paddingRight:theme.spacing(1),
  },
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom:'2.5rem'
}));


const useStyles = makeStyles({
  
  MainContainer:{
    paddingLeft:'16px',
    paddingRight:'16px',
    marginTop:'3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  },
  HeroContainer:{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom:'2.5rem'
  }
});

export const Hero = () => {
  const classes=useStyles();
  return <>
  
    <Grid container className={classes.MainContainer}>
      <HeroContainer>
      <Grid container  sx={{pr:'176px', pl:'176px'}} className={classes.HeroContainer}>
        <Grid item xs={12} md={6} >
           <LeftHero/>
        </Grid>
        
        <Grid item xs={12} md={6}  >
         <RightHero/>
        </Grid>
        </Grid>
        </HeroContainer>
        </Grid>
      
  </>;
};
