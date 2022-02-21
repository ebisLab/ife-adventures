import React from 'react';
import {title} from '../utils';

import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function MailList() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();


  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
  <div style={{padding: '5%'}}>
    <div 
          style={{
            background: 'white',
            margin: '0 14%',
            padding: '4%',
            borderRadius: '10px',
          boxShadow: '0px 0px 10px rgb(129 175 69)'}}
    >
      <div style={{padding: '2%'}}>
        <h1>Mailing List</h1>
        Sign up in our mailing list to stay updated on the next {title}. 
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
        <form 
        onSubmit={handleSubmit(onSubmit)} noValidate
        style={{            
          width: '75%',
          margin: 'auto'
}}>
          <div
          style={{
            // height: '3em',
            border: '1px solid rgb(220, 219, 235)',
            borderRadius: '20px',
            fontSize: '13px',
            padding: '10px 0px 10px 80px',
            color: '#000',
            transition: 'all .15s ease-in',
          }}
          >
            <input 
            type="text"
            className='mailinglist'
            placeholder='Your name'
            name='name'
            {...register('name', {
              required: { value: true, message: 'Please enter your name' },
              maxLength: {
                value: 30,
                message: 'Please use 30 characters or less'
              }
            })}
            style={{
              border: 'none',
              fontSize: '13px',
              padding: '10px',
              color: '#000',
              transition: 'all .15s ease-in',
            }}
            />
            {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
            <input 
            type="text"
            className='mailinglist'
            placeholder='Your email'
            name='email'
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            })}
            style={{
              border: 'none',
              fontSize: '13px',
              padding: '10px',
              color: '#000',
              transition: 'all .15s ease-in',
            }}
            />
            {errors.email && (
              <span className='errorMessage'>Please enter a valid email address</span>
            )}
            <button
            type="submit"
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
      <ToastContainer/>
      </div>



  </div>
  );
}
