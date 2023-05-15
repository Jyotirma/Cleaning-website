import React from 'react'

const ServiceCard = ({sName, icon}) => {
  return (
    <>
      <div className="item">
       <div className='s-icon'>{icon}</div> 
       <div className='s-name'>{sName}</div> 
      <div className="overlay"> 
        <button>Book Now</button>
       </div>
      </div>
      </> 
  )
}

export default ServiceCard
