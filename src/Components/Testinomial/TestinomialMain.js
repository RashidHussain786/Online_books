import { Grid } from '@mui/material';
import React from 'react';
import { styled} from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Testinomial1 } from './Testinomial1';
import { Testinomial2 } from './Testinomial2';

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
    marginTop:'1rem',
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

export const TestinomialMain = () => {
    const classes=useStyles();
  return <>
         <Grid container className={classes.MainContainer}>
        <HeroContainer>
        
           {/*Testimonial 1 */}
        <Grid item md={6} sx={{pl:'10px',pr:'100px',textAlign:'center',mt:'30px',mb:'30px'}} >
        <Testinomial1/>
        </Grid>
        {/*  testimonial 2  */ }
        <Grid item md={6} sx={{pl:'100px',pr:'10px',textAlign:'center',mt:'30px',mb:'30px'}} >
        <Testinomial2/>
        </Grid>
    
        </HeroContainer>
      </Grid>
  </>;
};
