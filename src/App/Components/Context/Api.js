import {createContext, useState} from 'react';

const GlobalContext = createContext({});

export const ContextProvider=({children})=>{
    const [display, setDisplay]=  useState(false);
    const [msg, setmsg] = useState("");
    const [status, setstatus] = useState(false);
    const [loading, setloading] = useState(false);
    const [user, setuser] = useState({});
    const host ='http://localhost:8000/';
    const [pop, setpop] = useState({
        display:false,
        title:'',
        content:<></>
    });
return (
    <GlobalContext.Provider value={{
        display, setDisplay, msg, status, setmsg, setstatus, loading, setloading, user, setuser, pop, setpop
        , host
        }}>
        {children}
    </GlobalContext.Provider>
    
        )
    }
    
    export default GlobalContext;
 
    