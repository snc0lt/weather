import React from 'react'
import AddButton from './AddButton'
import './AddCity.scss'
function AddCity() {
  return (
    <>
      <div className='add_city_form'>
        <form className='add_city_input'>
          <input
            placeholder='add location'
            style={{ borderRadius: '5px', marginTop: '30px', backgroundColor: '#cdcdd1' }} type="text" name="city" />
        </form>
      </div>
      <AddButton />
    </>
  )
}

export default AddCity
