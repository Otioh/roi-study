import React, { useContext } from 'react';
import { PaystackButton } from 'react-paystack';
import lap from '../Images/images.jpeg';
import GlobalContext from './Context/Api';
import { useNavigate } from 'react-router-dom';
function ProDetails({program}) {
    const {user, pop, setpop}=useContext(GlobalContext);
let navigate=useNavigate()
    const componentProps = {
        email:user.email,
        amount:program.fee*1000,
        metadata: {
          name:user.first_name+" "+user.surname,
          phone:user.phone,
        },
        publicKey:'pk_test_333a6d671ee3429b1b36e2aa2a8bf45eca7d3926',
        text: "Pay Now",
        onSuccess: () =>{
          navigate('/dashboard')
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
<ul className='list-group' >
 

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
  <th>
    Description
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
