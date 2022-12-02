import { useState } from 'react';
import { Searcher } from './components/Search';
import {Container} from '@mui/material';
function App() {
  const [userSearched, setUserSearched] = useState('octocat');
  const [userStater, setUserStater] = useState(userSearched);


  return (
    <Container  sx={{
      background:'whiteSmoke',
      width:'80vw',
      height:'500px',
      borderRadius:'16px',
      marginTop:'40px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }} title={'container'}>
     <Searcher  setUserSearched={setUserSearched}/>
    </Container>
  )
}

export default App
