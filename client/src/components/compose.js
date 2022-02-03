import React from 'react';

function Compose() {
  return (
  <div className='compose_body'>
     <input type="email" placeholder='Sender:'/> 
     <input type="email" placeholder='To:'/> 
     <input type="text" placeholder='Subject'/> 
     <textarea> Type your message</textarea>
  </div>
  )
}

export default Compose;