import {createContext, useState, useEffect} from 'react';

const GlobalContext = createContext({});

export const ContextProvider=({children})=>{
    const [display, setDisplay]=  useState(false);
    const [msg, setmsg] = useState("");
    const [status, setstatus] = useState(false);
    const [loading, setloading] = useState(false);
    const [user, setuser] = useState({});
return (
    <GlobalContext.Provider value={{
        display, setDisplay, msg, status, setmsg, setstatus, loading, setloading, user, setuser
        }}>
        {children}
    </GlobalContext.Provider>
    
        )
    }
    
    export default GlobalContext;
 
    