import React from 'react';
import contact from '../styles/contact.css'

export default function Contact() {
  return (
      <div style={{padding: '5% 15% 5%'}}>
          <h1>Contact Us</h1>
<div class="container">
  <form >
    <label for="fname">First Name</label>
    <input className="inputContact" type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input className="inputContact" type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label for="country">Country</label>
    <input className="inputContact" type="text" id="country" name="country" placeholder='Your country' />

    <label for="subject">Subject</label>
    {/* <textarea className="inputContact" id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> */}
    <textarea id="w3review" placeholder='Your message here...' name="w3review" rows="4" cols="50">
</textarea>
    <input type="submit" value="Submit" />
  </form>
</div>
</div>
  )
}
