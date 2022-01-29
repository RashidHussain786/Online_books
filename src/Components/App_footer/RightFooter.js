import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
export const RightFooter = () => {
  return <>
   <Button variant="text"disableElevation href="https://www.linkedin.com/in/rashid-hussain-9b737b1b0/" startIcon={<LinkedInIcon />}sx={{pr:'1rem'}}>LinkedIn</Button>
   <Button variant="text" disableElevation startIcon={<GitHubIcon />}sx={{pr:'1rem'}}>GitHub</Button>
   <Button variant="text" disableElevation startIcon={<TwitterIcon />}sx={{pr:'1rem'}}>Twitter</Button>
  </>;
};
