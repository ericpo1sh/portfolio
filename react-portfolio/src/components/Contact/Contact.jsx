import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0842c4fa-f7aa-49c0-a023-3f41760c93dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert('Email sent successfully!')
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's chat!</h1>
          <p>While I'm studying at Atlas, I'm also availiable to take on new projects, so feel free to let me know what you have in mind.</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon}></img><p>ericpo1sh@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} width={'38px'} height={'28px'}></img><p>(253)-754-2032</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} width={'38px'} height={'28px'}></img><p>Tulsa, OK</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor=''>Your Name</label>
          <input type='text' placeholder='Name' name='name'></input>
          <label htmlFor=''>Your Email</label>
          <input type='email' placeholder='Email' name='email'></input>
          <label htmlFor=''>Your Message</label>
          <textarea name='message' rows='8' placeholder='Your Message'></textarea>
          <button type='submit' className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
