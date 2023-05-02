
import { useState } from 'react';
import './App.css';

import { ContextProvider } from './App/Components/Context/Api';
import Loader from './App/Components/Loader';
import Modal from './App/Components/Modal';
import Pop from './App/Components/Pop';
import AppHolder from './App/Layout/AppHolder';

function App() {


  return (
   <>
   <ContextProvider>
    <Loader/>
     <Modal msg={'This is the message'} status={true}  />
     <Pop/>
    <AppHolder/>

   </ContextProvider>
   </>
  
    
  );
}


export default App;
