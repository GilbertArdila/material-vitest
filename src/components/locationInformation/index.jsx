import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import  TwitterIcon  from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'

const Locationinformation = ({ userState }) => {
    const { location, company, twitter_username, blog } = userState;
    return (
        <Grid container spacing={2} sx={{marginX:'15px'}} >
            <Grid item xs={6}>
                <Stack direction={'row'} spacing={2}>
                    <LocationOnIcon/>
                    {location !== null 
                    ? <Typography>{location}</Typography>
                    :<Typography>Not Avaliable</Typography>
                    }
                   
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction={'row'} spacing={2}>
                    <BusinessIcon/>
                    {company !== null
                    ? <Typography>{company}</Typography>
                    :<Typography>Not Avaliable</Typography>
                    }
                    
                </Stack>
            </Grid>
            <Grid item xs={6}>
                 <Stack direction={'row'} spacing={2}>
                <TwitterIcon/>
                {twitter_username !== null
                ?<Typography>{twitter_username}</Typography>
                :<Typography>Not Avaliable</Typography>
                }
                
                </Stack>
            </Grid>
            <Grid item xs={6}>
                 <Stack direction={'row'} spacing={2}>
                <LanguageIcon/>
                {blog !== null 
                ? <a href={blog} target={'_blank'} rel='noopener noreferrer'> <Typography>{blog}</Typography></a>
                :<Typography>Not Avaliable</Typography>
                }
                
                </Stack>
            </Grid>

        </Grid>
    )
}

export { Locationinformation }