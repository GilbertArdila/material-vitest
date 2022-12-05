import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const PrincipalInformation = ({ userState }) => {
    const { name, login, created_at } = userState;
    return (
        <>
            <Stack direction={'row'} sx={{justifyContent:'space-between'}}>
                <Typography variant='h4'>{name}</Typography>
                <Typography variant='subtitle2'>{created_at}</Typography>
            </Stack>
            <Typography variant='caption'>{`@${login}`}</Typography>
        </>
    )
}

export { PrincipalInformation }