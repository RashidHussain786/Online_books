import { Button, Grid, Typography } from '@mui/material';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import React from 'react';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
  
    Container1:{
      paddingLeft:'50px',
      paddingRight:'50px',
      marginBottom:'2.5rem',
    },
    textsubtitle:{
        paddingLeft:'50px',
      paddingRight:'50px',
    
    },
    button:{
        marginTop:'2.5rem',
        marginBottom:'2rem'
    },
    textspan:{
        color:'#1976d2',
    }
  });
export const LeftHero = () => {
    const classes=useStyles();
  return <>
     <Grid item xs={12} md={12} className={classes.Container1}>
              <Typography
                variant='h3'
                fontFamily='cursive'
                fontSize='3rem'
                color='#403e3e'
                
              >
                Find the <span className={classes.textspan}>  books </span> you are looking for anywhere
              </Typography>
            </Grid>

            <Grid item xs={12} md={12} className={classes.textsubtitle}>
              <Typography
                variant='subtitle'
                textAlign='center'
                fontFamily='cursive'
              >
                Search for books anywhere, you don't need to know the name of the book, if you know the name of the author or the publisher, just type and search.
              </Typography>
              <Grid item  className={classes.button}>
                <Button
                  variant='contained'
                  startIcon={<ScreenSearchDesktopIcon />}
                > Search Now </Button>
              </Grid>
            </Grid>
  </>;
};
