import React from 'react'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <Button className='navBtn'><NavLink className={'navLinks'} to='/dash'>Home</NavLink></Button>
        {/* <Button className='navBtn'><NavLink className={'navLinks'} to='/season'>Season Schedule</NavLink></Button> */}
        <Button className='navBtn'><NavLink className={'navLinks'} to='/roster'>Roster</NavLink></Button>
        {/* <Button className='navBtn'><NavLink className={'navLinks'} to='/weather'>Weather</NavLink></Button> */}
        
    </div>
  )
}

export default Navigation