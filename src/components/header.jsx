import React from 'react'

const Header = () => {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var days = ["moday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  var d = new Date();

  return (
    <div className='header'>
        <h1>To-do app</h1>
        <h2>{days[d.getDay()]},{months[d.getMonth()]} {d.getUTCDate() + ' ' + d.getFullYear()}</h2>
    </div>
  )
}

export default Header