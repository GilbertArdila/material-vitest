import { Typography } from '@mui/material';
import { Stack} from '@mui/system';
import React from 'react'
import { PaperInformation } from '../../components/paperInformation';
import { Locationinformation } from '../../components/locationInformation';

const Description = ({userState}) => {
    const {bio}= userState;
  return (
    <>
   <Stack sx={{justifyContent:'center'}}>
   {bio !== null 
    ? <Stack><Typography variant='body1'>{bio}</Typography></Stack>
    :<Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corporis distinctio ad explicabo possimus velit, natus sint aperiam ipsum quisquam atque tempore cum quia odit veniam animi recusandae exercitationem laudantium?</Typography>
}
   </Stack>
 
<PaperInformation  userState={userState}/>
<Locationinformation userState={userState}/>
      
    </>
  )
}

export  {Description}