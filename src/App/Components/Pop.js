import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import GlobalContext from './Context/Api';

function Pop() {
    const {pop, setpop}=useContext(GlobalContext);
   
  return (

      <div className="modal " id="basicModal" style={pop.display?{display:'block'}:{display:'none'}} tabindex="-1">
                <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content ">
                    <div className="modal-header " style={{backgroundColor:'#012970', color:'white'}} >
                      <h5 className={`modal-title`}>{ pop.title}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{
                        setpop({...pop, display:false})
                      }}></button>
                    </div>
                    <div className="modal-body">
                     {pop.content}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className={`btn btn-outline-danger`} data-bs-dismiss="modal" onClick={()=>{
                          setpop({...pop, display:false})
                      }}>Close</button>
                     
                    </div>
                  </div>
                </div>
              </div>
  
  )
}

export default Pop
