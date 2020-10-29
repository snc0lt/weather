import React from 'react'

function MainPlaceToVisit() {
  return (
    <div>
      <h5 style={{marginBottom:'30px', fontWeight: 'bold', color: '#545454'}}>Places to visit</h5>
      <div style={{
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5MoTgVtL1Ezm6G-U3rhAO3e_dYEhOJIdKxQ&usqp=CAU)',
        objectFit: 'contain',
        height: '180px',
        borderRadius: '20px'
      }}>
        <i style={{paddingLeft: '5px', color: 'white'}} className="fas fa-map-marker-alt"></i>
        <small style={{paddingLeft: '5px', color: 'white'}}>The Gold Museum</small>
      </div>
    </div>
  )
}

export default MainPlaceToVisit