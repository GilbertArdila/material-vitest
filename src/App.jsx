import { useState,useEffect } from 'react';
import { Searcher } from './components/Search';
import {Container} from '@mui/material';
import { getGitHubUser } from './services/users';
function App() {
  const [userSearched, setUserSearched] = useState('octocat');
  const [userState, setUserState] = useState(userSearched);
  const [notFound, setNotFound] = useState(false);



 const getUserData =async (user) => {
   const response =await getGitHubUser(user);
   if(userState==='octocat'){
    localStorage.setItem('octocat',response)
   }
   if(response=== undefined){
    const {octocat}=localStorage;
    setUserSearched(octocat);
    setNotFound(true);
   }else{
    setUserState(response);
   }
  
 };
 useEffect(() => {
 
  getUserData(userSearched)
 }, [userSearched]);

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
