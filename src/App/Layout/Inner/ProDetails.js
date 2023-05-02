
import React, { useContext } from 'react';
import { PaystackButton } from 'react-paystack';
import lap from '../Images/images.jpeg';
import GlobalContext from "../../Components/Context/Api";

import axios from 'axios';  

function ProDetails({program, afterPay}) {
    const {user, pop, setpop, host}=useContext(GlobalContext);



    const componentProps = {
        email:user.email,
        amount:program.fee*100,
        metadata: {
          name:user.first_name+" "+user.surname,
          phone:user.phone,
        },
        publicKey:'pk_test_333a6d671ee3429b1b36e2aa2a8bf45eca7d3926',
        text: "Pay Now",
        onSuccess: (msg) =>{
         
       axios.post(host+'payments', {payer:user.email, description:'Payment for '+program.duration+' '+program.title+' Training', amount:program.fee, status:msg.message, tran_id:msg.reference}).then((response)=>{
      
        afterPay()
       })
          setpop({...pop, display:false})},
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
      }

  return (
    <div>
          <div className='row'>
<div className=' col-sm-5'>
<img style={{width:'100%'}} alt='ProgrammeImage' src={lap}  />

</div>
<div className=' col-sm-3'>
<ul className='list-group'>

{
                      program.courses.split(',').map((course)=>{
                                 return           <li className='list-group-item'>
{course}
                    </li>

                      })
                    }
                  </ul>
</div>
<div className=' col-sm-4'>
<h3>
  Programme Description
</h3>
{program.description }<br/><br/>
<hr/>
<table className='table table-borderless table-hover table-striped'>
  <th>
    Fee
  </th>
  <th>
    Duration
  </th>

  <tbody>
    <tr>
      <td>
      NGN {program.fee}
      </td>
      <td>
      Duration {program.duration}
      </td>
    </tr>
  </tbody>
</table>




<PaystackButton className="btn btn-primary" {...componentProps} />

</div>
                   </div>

               <div>
                 



                    </div>
    </div>
  )
}

export default ProDetails
