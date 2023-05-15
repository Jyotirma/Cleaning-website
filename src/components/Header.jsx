import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src="logo4.png" alt="" />
      </div>
      <div className="contact">
       <div className='icon_cont'> <EmailIcon className='icon'/> 
        <Link to="mailto: abc@example.com"> abc@example.com</Link></div>
        <div className='icon_cont'> <PhoneIcon className='icon'/>
        <Link to="tel:6745893546">+91 6745893546</Link></div>
      </div>
    </div>
  )
}

export default Header
