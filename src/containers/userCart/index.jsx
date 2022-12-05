import { CardMedia, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { PrincipalInformation } from '../principalInformation';
import { Description } from '../description';
import { Stack } from '@mui/system';

const UserCart = ({ userState }) => {
  const { avatar_url } = userState;

  return (
    <Grid 
    container 
    spacing={2}
    sx={{marginTop:'15px'}}
    >
      <Grid item xs={3}>
        <CardMedia
        component={'img'}
        image={avatar_url}
        alt='GitHub User' 
        sx={{borderRadius:'50%'}}
        />
        </Grid>
      <Grid item xs={9}> 
       <Stack 
       direction={'column'}
       spacing={1}
       sx={{margin:'30px'}}
       >
       <PrincipalInformation 
       userState={userState}
       
       />
        <Description userState={userState}/>
       </Stack>
       </Grid>
     
      


    </Grid>
  )
}

export { UserCart }