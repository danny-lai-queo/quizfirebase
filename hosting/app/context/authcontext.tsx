'use client'
import { useContext, createContext, useState, useEffect, Context, Component } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, User } from 'firebase/auth';
import { auth } from '../firebase';
// import { init } from "next/dist/compiled/@vercel/og/satori";

// type User = {
//     id: string;
//     name: string;
//     avatar: string;
//   };

interface IProps {
    children: React.ReactNode;
}

export interface IAuthContextType {
    user: User | null;
    // signInWithGoogle: () => Promise<void>;
    //logOut: () => Promise<void>;
    signInWithGoogle: () => void;
    //emailSignIn: ({ email, password }: SignInCredentials) => void
    logOut: (callback:()=>void) => void;
    //userProfileData: any;
    //loadingUser: boolean;
};

const signInWithGoogle = () => {
    console.log("signInWithGoogle");
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: 'select_account'
      });
    signInWithPopup(auth, provider);
};

const logOut = (cb:() => void) => {
    console.log("logOut");
    console.log(window.location.href);
    console.log(window.location.host)

    //signOut(auth);
    signOut(auth).then(() => cb()).catch((err) => {
        console.log(err);
    });

    //return signOut(auth);

};

const initialState: IAuthContextType = {
    user: null,
    signInWithGoogle,
    logOut: (cb) => { throw new Error("not implemented"); }
    // logOut: () => {
    //     return new Promise(() => {
    //         throw new Error('Function not implemented.');
    //     })
    // }
    // userProfileData: undefined,
    // loadingUser: false,
  };

//const AuthContext = createContext<IAuthContext | undefined>(undefined)
const AuthContext = createContext<IAuthContextType>(initialState);

interface IChildren {
    children:Component;
}

export const AuthContextProvider = ({children}:IProps):React.ReactNode => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        console.log("userEffect callback")
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("unsubscribe onAuthStateChanged", currentUser);
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [user]);
    
    console.log(user);

    return (
        <AuthContext.Provider value={{
            user,
            signInWithGoogle,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(AuthContext)
}