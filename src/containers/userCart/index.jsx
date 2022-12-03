import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import { PrincipalInformation } from '../principalInformation';

const UserCart = ({userState}) => {
    const {avatar_url} = userState;
    console.log(userState)
  return (
    <Grid container spacing={2}>
     <Grid item xs={3}><CardMedia
      component={'img'}
       image={avatar_url}
        alt='GitHub User'/></Grid>
     <Grid item xs={9}>  <PrincipalInformation userState={userState}/></Grid>
   
    </Grid>
  )
}

export  {UserCart}