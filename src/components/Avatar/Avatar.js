import React, { Component } from 'react';
import './Avatar.css'

const Avatar = ({type = 'row', size = '50', name, src, status}) => {

  let avatarClass = type === 'row' ? 'Avatar AvatarRow' : 'Avatar AvatarCol'
  let statuClass = status ? 'Status' + ' Status-'+status : 'Status'

  if (!name) {
    avatarClass = 'Avatar'
  }

  return (
    <div className={avatarClass}>
      <img
        src={src}
        width={size}
        height={size}
        className="AvatarImage"
      />
      {
        name &&
        <div className="AvatarInfo">
          <div>{name}</div>
          <div className={statuClass}>{status}</div>
        </div>
      }
    </div>
  )
}

export default Avatar;
