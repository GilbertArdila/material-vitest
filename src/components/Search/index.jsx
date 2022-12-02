import React,{useState} from 'react';
import { Stack,IconButton,TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = ({setUserSearched}) => {
  const [inputSearch, setInputSearch] = useState('');

  const handleSubmit = () => {
    setUserSearched(inputSearch)
    setInputSearch('')
  }
  return (
    <Stack 
    title={'stack'} 
    direction='row' 
    sx={{
        marginTop:'30px',
        width:'80%'
    }}>
        <TextField 
        title={'searcher'}
        id='outlined-basic'
        label='GitHub user'
        variant='outlined'
        size='small'
        placeholder='Search GitHub user'
        sx={{width:'90%'}}
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        ></TextField>
        <IconButton
          size='small'
        sx={{left:'-35px'}}
        onClick={handleSubmit}
        >
            <SearchIcon />
        </IconButton>
    </Stack>
  )
}

export  {Searcher}