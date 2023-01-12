import React, { useContext } from 'react'
import GlobalContext from './Context/Api'

function Loader() {
    const {loading}=useContext(GlobalContext);
  return (
    <div style={loading?{position:'fixed', zIndex:7000000000, backgroundColor:'rgba(255,255,255,0.5)', width:'100vw', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}:{display:'none'}}>
       <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
    </div>
  )
}

export default Loader
