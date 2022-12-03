import { useState,useEffect } from 'react';
import { Searcher } from './components/Search';
import {Container} from '@mui/material';
import { getGitHubUser } from './services/users';
import {UserCart} from './containers/userCart';
function App() {
  const [userSearched, setUserSearched] = useState('octocat');
  const [userState, setUserState] = useState(userSearched);
  const [notFound, setNotFound] = useState(false);



 const getUserData =async (user) => {
   const response =await getGitHubUser(user);
   //in the begginig it is octocat by default
   if(userState==='octocat'){
    localStorage.setItem('octocat',response)
   }
   //if user typed does not exist
   if(response=== undefined){
    //send octocat again from localStorage
    const {octocat}=localStorage;
    setUserSearched(octocat);
    setNotFound(true);
    //if user typed exist
   }else{
    setUserState(response);
    //if we want to show the last typed user in case actual typed user does not exist
    //localStorage.setItem('octocat',response)

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
     <UserCart userState={userState}/>
    </Container>
  )
}

export default App
