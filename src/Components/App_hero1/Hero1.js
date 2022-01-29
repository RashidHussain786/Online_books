import { Grid } from '@mui/material';
import React from 'react';
import { HeadLine } from './HeadLine';
import { LeftHero1 } from './LeftHero1';
import { RightHero1 } from './RightHero1';
import { styled} from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { LeftHero2 } from './LeftHero2';
import { RightHero2 } from './RightHero2';
import { LeftHero3 } from './LeftHero3';
import { RightHero3 } from './RightHero3';

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
  },
  HeroContainer:{
    pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom:'2.5rem'
  }
});

export const Hero1 = () => {
  const classes=useStyles();
  return <>
  <Grid container className={classes.MainContainer}>
      <HeroContainer>
      <Grid container  sx={{pr:'176px', pl:'176px'}} className={classes.HeroContainer}>
        {/*  Head Line  */ }
        <Grid item md={12} sx={{pt:'20px',py:'20px',textAlign:'center'}} >
        <HeadLine/>
        </Grid>
        {/*  Left hero 1  */ }
        <Grid item md={6} sx={{pl:'10px',pr:'10px',textAlign:'center',mt:'30px',mb:'30px'}} >
        <LeftHero1/>
        </Grid>
        {/*  Right hero 1  */ }
        <Grid item md={6} sx={{pl:'15rem',pr:'1rem',pt:'1rem',pb:'1rem',float:'right'}} >
        <RightHero1/>
        </Grid>
        {/*  Left hero   */ }
        <Grid item md={6} sx={{pr:'15rem',pl:'1rem',pt:'1rem',pb:'1rem',float:'right'}} >
        <LeftHero2/>
        </Grid>
        {/*  Right hero   */ }
        <Grid item md={6} sx={{pl:'10px',pr:'10px',textAlign:'center',mt:'30px',mb:'30px'}} >
        <RightHero2/>
        </Grid>
        {/*  Left hero 3  */ }
        <Grid item md={6} sx={{pl:'10px',pr:'10px',textAlign:'center',mt:'30px',mb:'30px'}} >
        <LeftHero3/>
        </Grid>
         {/*  Right hero 3  */ }
         <Grid item md={6} sx={{pl:'15rem',pr:'1rem',pt:'1rem',pb:'1rem',float:'right'}} >
        <RightHero3/>
        </Grid>
        
        </Grid>
        </HeroContainer>
        </Grid>
     
  </>;
};
