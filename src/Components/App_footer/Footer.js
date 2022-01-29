import { Grid } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { LeftFooter } from './LeftFooter';
import { MiddleFooter } from './MiddleFooter';
import { RightFooter } from './RightFooter';

const useStyles = makeStyles({
  
  MainContainer:{
    paddingLeft:'3rem',
    paddingRight:'3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'black',
  height:'200px'
  },
  HeroContainer:{
  alignItems: 'center',
  justifyContent: 'center',
  justifyItems:'center',
  marginBottom:'2.5rem',
  paddingLeft:'5rem'
  }
});
export const Footer = () => {
  const classes=useStyles();
  return <>
     <Grid container className={classes.MainContainer}>
      <Grid container   className={classes.HeroContainer}>
        {/*Left Footer */}
        <Grid item xs={12} md={4} sx={{color:'white'}}>
           <LeftFooter/>
        </Grid>
        {/*Middle Footer */}
        <Grid item xs={12} md={4} sx={{color:'white'}} >
         <MiddleFooter/>
        </Grid>
      {/*Right Footer */}
        <Grid item xs={12} md={4} sx={{color:'white'}} >
         <RightFooter/>
        </Grid>

        </Grid>
        </Grid>
  </>;
};
