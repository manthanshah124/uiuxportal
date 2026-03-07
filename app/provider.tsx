"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UserDetailContext } from '@/context/UserDetailContext'
import { useUser } from '@clerk/nextjs'

function Provider({children}: any) {
    const {user}=useUser();
    const [UserDetail,setUserDetail]=useState()

    useEffect(()=>{
     if (user) {
            CreateNewUser();
        }
    },[user])

    const CreateNewUser=async()=>{
      try {
            const result=await axios.post('/api/user',{});
            console.log(result.data);
            setUserDetail(result?.data);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }  
  return (
    <UserDetailContext.Provider value={{UserDetail,setUserDetail}}>
    <div>{children}</div>
    </UserDetailContext.Provider>
  )
}
export default Provider