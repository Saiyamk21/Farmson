import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth=()=>{
  const isauth=useContext(AuthContext);
  return isauth;
};

export const Auth=(props)=>{
  const [authState,authupdate] = useState({
    isAuthenticated: false,
    response: null,
  });
  // async function checkauth(){
  //   const result=await axios.get('/login');
  //   if(result.data){
  //     authupdate({
  //       isAuthenticated:true,
  //       response:null,
  //   });
  //   }
  //   else{
  //     authupdate({
  //       isAuthenticated:false,
  //       response:null
  //     });
  //   }
  // }
// useEffect(()=>{
//   checkauth();
//     },[])

  return (
  <div>
    <AuthContext.Provider value={{authState,authupdate}}>
    {props.children}
    </AuthContext.Provider>
  </div>
  );
}

