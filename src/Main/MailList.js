import React from 'react';
import {title} from '../utils'

export default function MailList() {
  return (
  <div style={{padding: '5%'}}>
    <div 
          style={{
            background: 'white',
            margin: '0 15%',
            padding: '4%',
            borderRadius: '10px',
          boxShadow: '0px 0px 10px rgb(107 138 183)'}}
    >
      <div style={{padding: '2%'}}>want to stay updated on the next {title}? Sign up in our mailing list, and you might get a sweet deal. </div>
      <form 
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

      </form>
      </div>

  </div>
  );
}
