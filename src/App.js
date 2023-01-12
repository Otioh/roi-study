
import { useState } from 'react';
import './App.css';
import Index from './App/Components';
import { ContextProvider } from './App/Components/Context/Api';
import Loader from './App/Components/Loader';
import Modal from './App/Components/Modal';

function App() {


  return (
   <>
   <ContextProvider>
    <Loader/>
     <Modal msg={'This is the message'} status={true}  />
     <Index />

   </ContextProvider>
   </>
  
    
  );
}


export default App;
