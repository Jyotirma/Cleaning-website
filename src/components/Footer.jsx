import React from 'react'
import './Footer.css'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <footer>
        <div className='foot_cont'>
      <div className="foot_abt">        
         <p className='abt_name'>Clapingo</p>
         <p className='abt_decs'> We are certified company. We provide the best cleaning service for you & your company

</p>
      </div>
      <div className="foot_service">
        <p className='foot_heading'>Services</p>
        <ul>
            <li>Building Cleaning</li>
            <li>House Cleaning</li>
            <li>Kitchen Cleaning</li>
            <li>Bathroom Cleaning</li>
            <li>Car Wash</li>
            <li>Office Cleaning</li>
        </ul>
   
      </div>
      <div className="foot_address">
        <p className='foot_heading'>Address</p>
        <ul>
            <li><PlaceIcon/> Boulevard des Capucines, Hyderabad</li>
            <li><PhoneInTalkIcon/> +91 6575683287</li>
            <li><EmailIcon/> abc.example@gmail.com</li>
        </ul>
      </div>
      <div className="foot_contact">
            <p className='foot_heading'>Follow Us</p>
            <ul>
            <li><FacebookIcon/> <span>FaceBook</span> </li>
            <li><InstagramIcon/> <span>Instagram</span> </li>
            <li><TwitterIcon/> <span>Twitter</span> </li>
            
        </ul>
      </div>
      </div>
      <p className='copyright'>© Jyotirmayee Prusty | @ 2023</p>
    </footer>
  )
}

export default Footer
