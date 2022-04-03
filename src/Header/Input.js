import React from 'react'

export default function Input() {
  return (



        <form 
        style={{            
          // width: '55%',
          zIndex: '1'
}}>
          <div
          style={{
            // height: '3em',
            marginTop:'5%',
            marginLeft: '10px',
            border: '1px solid rgb(220, 219, 235)',
            borderRadius: '20px',
            fontSize: '13px',
            padding: '10px 15px 10px 10px',
            color: '#000',
            background:'white',
            transition: 'all .15s ease-in',
          }}
          >
            <input 
            type="text"
            className='mailinglist'
            placeholder='Your name'
            name='name'
            style={{
              border: 'none',
              fontSize: '13px',
              padding: '10px',
              color: '#000',
              transition: 'all .15s ease-in',
            }}
            />
            <input 
            type="text"
            className='mailinglist'
            placeholder='Your email'
            name='email'
            style={{
              border: 'none',
              fontSize: '13px',
              padding: '10px',
              color: '#000',
              transition: 'all .15s ease-in',
            }}
            />
            <button
            type="submit"
            style={{
              // height: '3em',
              width: '100px',
              border: 'none',
              padding:'10px',
              borderRadius: '10px',
              fontSize: '13px',
              color: 'white',
              background:'rgb(95, 63, 211) ',
              transition: 'all .15s ease-in',
            }}
            >Send</button>
          </div>
        </form>




  )
}
