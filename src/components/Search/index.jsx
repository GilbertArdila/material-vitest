import React,{useState} from 'react';
import { Stack,IconButton,TextField, Alert} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = ({setUserSearched}) => {
  const [inputSearch, setInputSearch] = useState('');
  const [isEmpty, setIsEmpty] = useState(false)

  const handleSubmit = () => {
    if(inputSearch===''){
      setIsEmpty(true);
      
    }else{
       setUserSearched(inputSearch)
       setInputSearch('');
       setIsEmpty(false);
    }
   
  }
  return (
    <>
    <Stack 
    title={'stack'} 
    direction='row' 
    sx={{
        marginTop:'30px',
        marginBottom:'30px',
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
    {isEmpty ? <Alert severity='warning'>Ingresa un usuario para poder continuar</Alert>: null}
    </>
  )
}

export  {Searcher}