import React, {useState} from 'react'
import contact from '../styles/contact.css'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function Contact() {
    const [finished, setFinished]=useState(false)

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
        //   toastifySuccess();
        setInterval(() => {
            setFinished(true)
          }, 800);
        } catch (e) {
          console.log(e);
        }
      };
  return (
      <div style={{padding: '2% 15% 5%', textAlign: 'left', height: '90vh'}}>
          <h1>Contact Us</h1>
          <h3>Please allow 24-48 hours for a response from the team</h3>
<div class="container">
  {finished?(<div>Success</div>):(<form 
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
    {errors.fname && <div style={{color: 'BE5F4B'}} className='errorMessage errPlacement'>{errors.fname.message}</div>}


    <label for="lname">Last Name</label>
    <input className="inputContact" type="text" id="lname" name="lastname" placeholder="Your last name.." 
        {...register('lname', {
            required: { value: true, message: 'Please enter your last name' },
            maxLength: {
              value: 30,
              message: 'Please use 30 characters or less'
            }
          })}/>
              {errors.lname && <div className='errorMessage errPlacement'>{errors.lname.message}</div>}


    <label for="email">Email</label>
    <input className="inputContact" type="text" id="email" name="email" placeholder='Your email' 
                {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })}/>
    {errors.email && (
<div className='errorMessage errPlacement'>Please enter a valid email address</div>
)}

    <label for="subject">Subject</label>
    {/* <textarea className="inputContact" id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> */}
    <textarea id="w3review" placeholder='Your message here...' name="w3review" rows="4" cols="50"
        {...register('message', {
            required: { value: true, message: 'Please enter your message' }
          })}
    >
</textarea>
{errors.message && <div className='errorMessage errPlacement'>{errors.message.message}</div>}

<div style={{height: '44px'}}>

    <input type="submit" value="Submit" style={{borderBottom: '10px solid green'}} />
    </div>
  </form>)}
</div>
</div>
  )
}
