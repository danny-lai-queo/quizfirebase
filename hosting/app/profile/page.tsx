'use client'
import React, {useEffect, useState} from 'react'
import { UserAuth } from "../context/authcontext";
import Spinner from '../components/spinner';

const Page = () => {
  const { user, signInWithGoogle, logOut } = UserAuth();
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() =>{
    const checkAuth = async () => {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setLoading(false);
    };
    checkAuth();
  }, [user]);

  return (<div className='p-4'>
    {loading ? ( <Spinner /> ) 
      : !user ? (<p>you are not logged in</p>) : (<p> Profile of {user.displayName}</p>)
    }
    </div>
  )
}

export default Page

