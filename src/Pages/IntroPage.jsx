import React from 'react'
import './IntroPage.css'
import ServiceCard from '../components/ServiceCard'
import HomeIcon from '@mui/icons-material/Home';
import CountertopsIcon from '@mui/icons-material/Countertops';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const IntroPage = () => {
  return (
    <div className='cont'>
        <div className="banner">
            <p className='tagline'>Welcome To</p>
            <p className='tagline name'>Cleaningo</p>
        </div>
        <div className="services">
            <p className='service_heading'>Our Cleaning <span>Services</span> </p>
            <div className='service-cont'>
            <ServiceCard sName="Building Cleaning" icon={<ApartmentIcon/>}/>
            <ServiceCard sName="House Cleaning" icon={<HomeIcon/>}/>
            <ServiceCard sName="Kitchen Cleaning" icon={<CountertopsIcon/>}/>
            <ServiceCard sName="Bathroom Cleaning" icon={<BathtubIcon/>}/>
            <ServiceCard sName="Car Wash" icon={<LocalCarWashIcon/>}/>
            <ServiceCard sName="Office Cleaning" icon={<CleaningServicesIcon/>}/>
            </div>
        </div>
        <div className="about">
            <p className="service_heading">About <span>Us</span> </p>
           
            <div className="about_cont">
            <div>
                <img src="https://wp-cleaning.mv-theme.pro/wp-content/uploads/2023/03/illustration.jpg" alt="" />
            </div>
            <div className='about_desc'>
                <p className='res_heading'>Why Will You Choose Our Services?</p>
                <p className='desc'>We provide professionally top quality cleaning services</p>
                <ul>
                    <li> <span> <TaskAltIcon/></span> most affordable and special prices. </li>
                    <li> <span> <TaskAltIcon/></span> proud to provide quality service to our valued customers</li>
                    <li> <span> <TaskAltIcon/></span> At your service with our expert staff and modern equipment</li>
                    <li> <span> <TaskAltIcon/></span> we make your office, home, workplace sparkling</li>
                </ul>
            </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default IntroPage
