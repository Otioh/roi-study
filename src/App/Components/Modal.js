import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import GlobalContext from './Context/Api';

function Modal() {
    const {setDisplay, display, msg, status}=useContext(GlobalContext);
   
  return (

      <div className="modal " id="basicModal" style={display?{display:'block'}:{display:'none'}} tabindex="-1">
                <div className="modal-dialog">
                  <div className="modal-content ">
                    <div className="modal-header">
                      <h5 className={status?`modal-title text-success`:`modal-title text-warning`}>{ status?<><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Success </>:<><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> Error </>}</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{
                        setDisplay(false)
                      }}></button>
                    </div>
                    <div className="modal-body">
                     {msg}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className={status?`btn btn-success`:`btn btn-warning`} data-bs-dismiss="modal" onClick={()=>{
                        setDisplay(false)
                      }}>Close</button>
                     
                    </div>
                  </div>
                </div>
              </div>
  
  )
}

export default Modal
