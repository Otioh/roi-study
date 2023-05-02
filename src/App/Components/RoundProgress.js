import React from 'react'

function RoundProgress({value,text}) {
  return (
    <div class="col-lg-3 col-sm-6 cp-item">
      <div className='round' style={{border:'solid 7px red', height:'250px', width:'250px', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div class="progress-info">
          <progress title={value+'%'} style={{height:'70px',padding:'4px'}}   value={value} max={100}></progress>

          <h2>{value}%</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default RoundProgress