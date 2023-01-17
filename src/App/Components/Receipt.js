import React, { useContext } from 'react';
import GlobalContext from './Context/Api';

function Receipt() {
    const {user, pop, setpop, setloading}=useContext(GlobalContext);
  return (
    <div style={{width:'100vw', height:'100vh', backgroundColor:'#f6f9ff'}}>
      
<div className="container" style={{backgroundColor:'white'}}>
    <div className="row">
        <div className="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6">
                    <address>
                        <strong className='text-primary'>Roi Study</strong>
                        <br/>
                        24 Etagbor Road
                        <br/>
                        Calabar, Nigeria
                        <br/>
                        <abbr title="Phone">P:</abbr> (213) 484-6829
                    </address>

                    <address>
                        <strong className='text-primary'>{user.first_name} {user.surname}</strong>
                        <br/>
                      {user.email}
                        <br/>
                      
                    </address>


                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                    <p>
                        <em>Date: 13 January, 2023</em>
                    </p>
                    <p>
                        <em>Receipt #: 34522677W</em>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="text-center">
                    <h1>Receipt</h1>
                </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>#</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-md-9"><em>Front End Web Development ( Web Basics, JavaScript Basics, Advance JavaScript, React JS, Redux & Redux Toolkit )</em></td>
                            <td className="col-md-1" style={{textAlign: 'center'}}> 2 </td>
                            <td className="col-md-1 text-center">NGN 300</td>
                            <td className="col-md-1 text-center">NGN 300</td>
                        </tr>
                        <tr>
                            <td className="col-md-9"><em>Transaction fee</em></td>
                            <td className="col-md-1" style={{textAlign: 'center'}}> 1 </td>
                            <td className="col-md-1 text-center">NGN 10</td>
                            <td className="col-md-1 text-center">NGN 10</td>
                        </tr>
                     
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td className="text-right">
                            <p>
                                <strong>Subtotal: </strong>
                            </p>
                            <p>
                                <strong>Tax: </strong>
                            </p></td>
                            <td className="text-center">
                            <p>
                                <strong>NGN 310</strong>
                            </p>
                            <p>
                                <strong>NGN 6.94</strong>
                            </p></td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td className="text-right"><h4><strong>Total: </strong></h4></td>
                            <td className="text-center text-danger"><h4><strong> 316.94</strong></h4></td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="btn btn-primary btn-lg btn-block">
                    Print   
                </button>
                <a href='/#/' className="btn btn-outline-primary btn-lg btn-block" >
                    Continue   
                </a>
                </div>
            </div>
        </div>
    </div>
 
  )
}

export default Receipt
