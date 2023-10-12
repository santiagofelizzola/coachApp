import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <NavLink to='/dash'>Home</NavLink>
        {/* <NavLink to='/season'>Season Schedule</NavLink> */}
        <NavLink to='/roster'>Roster</NavLink>
        {/* <NavLink to='/weather'>Weather</NavLink> */}
    </div>
  )
}

export default Navigation