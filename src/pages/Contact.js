import React from 'react';
import contact from '../styles/contact.css'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function Contact() {
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
        const { fname, lname, email, subject, message } = data;
        try {
          const templateParams = {
            fname,
            lname,
            email,
            subject,
            message,
            reply_to: 'Dr. Tee-Tee'
          };
          await emailjs.send(
            process.env.REACT_APP_CONTACT_SERVICE_ID,
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
      <div style={{padding: '5% 15% 5%', textAlign: 'left'}}>
          <h1>Contact Us</h1>
          <h3>Please allow 24-48 hours for a response from the team</h3>
<div class="container">
  <form 
          onSubmit={handleSubmit(onSubmit)} noValidate

  >
    <label for="fname">First Name</label>
    <input className="inputContact" type="text" id="fname" name="firstname" placeholder="Your name.."
    {...register('fname', {
        required: { value: true, message: 'Please enter your name' },
        maxLength: {
          value: 30,
          message: 'Please use 30 characters or less'
        }
      })}/>
    {errors.fname && <span className='errorMessage'>{errors.fname.message}</span>}


    <label for="lname">Last Name</label>
    <input className="inputContact" type="text" id="lname" name="lastname" placeholder="Your last name.." 
        {...register('lname', {
            required: { value: true, message: 'Please enter your last name' },
            maxLength: {
              value: 30,
              message: 'Please use 30 characters or less'
            }
          })}/>
              {errors.lname && <span className='errorMessage'>{errors.lname.message}</span>}


    <label for="email">Email</label>
    <input className="inputContact" type="text" id="email" name="email" placeholder='Your email' 
                {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })}/>
    {errors.email && (
<span className='errorMessage'>Please enter a valid email address</span>
)}

    <label for="subject">Subject</label>
    {/* <textarea className="inputContact" id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> */}
    <textarea id="w3review" placeholder='Your message here...' name="w3review" rows="4" cols="50"
        {...register('message', {
            required: { value: true, message: 'Please enter your message' }
          })}
    >
</textarea>
{errors.message && <span className='errorMessage'>{errors.message.message}</span>}

    <input type="submit" value="Submit" />
  </form>
</div>
</div>
  )
}
