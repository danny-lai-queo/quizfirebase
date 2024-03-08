'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { UserAuth } from "../context/authcontext";
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const { user, signInWithGoogle, logOut } = UserAuth();
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    
    const doSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch(error) {
            console.log(error);
        }
    }

    const doSignOut = async () => {
        try {
            await logOut(() => {
                console.log("bye bye");
                //navigate("/");
                router.push("/");
            });
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        const checkAuth = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuth();
    }, [user]);

  return (
    <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>
        <ul className='flex'>
            <li className='p-2 cursor-pointer'>
                <Link href='/'>Home</Link>
            </li>
            <li className='p-2 cursor-pointer'>
                <Link href='/about'>About</Link>
            </li>
            {!user? null : (
                <li className='p-2 cursor-pointer'>
                    <Link href='/profile'>Profile</Link>
                </li>
            )}
        </ul>
        { loading ? null :
        !user? (
                    <ul className='flex'>
                    <li className='p-2 cursor-pointer' onClick={doSignIn}>
                        Login
                    </li>
                    <li className='p-2 cursor-pointer' onClick={doSignIn}>
                        Sign Up
                    </li>
                </ul>
        ) : (
            <div>
                <p>User: {user.displayName}</p>
                <p className='cursor-pointer' onClick={doSignOut}>Sign Out</p>
            </div>
        )}

    </div>
  )
}

export default Navbar