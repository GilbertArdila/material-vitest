import { urlFetch } from "../constants";
import axios from 'axios';

const getGitHubUser = async (user) => {
   
    const response = await axios.get(`${urlFetch}${user}`)
     
    .catch(function (error){
        if (error.response) {
            
            return  error.response.data
          }
    })
     return response.data
    
};




export {getGitHubUser}