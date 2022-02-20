import React from 'react';
import {title} from '../utils'

export default function MailList() {
  return (
  <div style={{padding: '5%'}}>
    <div 
          style={{
            background: 'white',
            margin: '0 14%',
            padding: '4%',
            borderRadius: '10px',
          boxShadow: '0px 0px 10px #5a7c2d'}}
    >
      <div style={{padding: '2%'}}>
        <h1>Mailing List</h1>
        Want to stay updated on the next {title}? Sign up in our mailing list, and you might get a sweet deal. 
        </div>
      {/* <form 
      >
          <label>Name</label>
          <input 
          style={{
            // height: '3em',
            border: '1px solid rgb(220, 219, 235)',
            borderRadius: '4px',
            fontSize: '13px',
            padding: '10px',
            color: '#000',
            transition: 'all .15s ease-in',
          }}
          ></input>
          <label> Email Address</label>
          <input
            style={{
              // height: '3em',
              border: '1px solid rgb(220, 219, 235)',
              borderRadius: '4px',
              fontSize: '13px',
              padding: '10px',
              color: '#000',
              transition: 'all .15s ease-in',
            }}></input>
          <button style={{height: '3em'}}>Submit</button>

      </form> */}

      <div>
        <form style={{            
          width: '75%',
          margin: 'auto'
}}>
          <div
          style={{
            // height: '3em',
            border: '1px solid rgb(220, 219, 235)',
            borderRadius: '4px',
            fontSize: '13px',
            padding: '10px',
            color: '#000',
            transition: 'all .15s ease-in',
          }}
          >
            <input 
            className='mailinglist'
            placeholder='Your name'
            style={{
              border: 'none',
              fontSize: '13px',
              padding: '10px',
              color: '#000',
              transition: 'all .15s ease-in',
            }}
            />
            <input 
            className='mailinglist'
            placeholder='Your email'
            style={{
              border: 'none',
              fontSize: '13px',
              padding: '10px',
              color: '#000',
              transition: 'all .15s ease-in',
            }}
            />
            <button
            style={{
              // height: '3em',
              width: '100px',
              border: 'none',
              borderRadius: '10px',
              fontSize: '13px',
              padding: '15px',
              color: 'white',
              background:'rgb(95, 63, 211) ',
              transition: 'all .15s ease-in',
            }}
            >Send</button>
          </div>
        </form>
      </div>
      </div>



  </div>
  );
}
