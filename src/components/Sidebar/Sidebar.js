import React, { Component } from 'react';
import Avatar from '../../components/Avatar'

import './Sidebar.css'

const MenuItem = ({color, text, icon}) => {
  return (
    <div className="MenuItem">
      <span className="MenuIcon">
        <i className="material-icons" style={{'color': color}}>{icon}</i>
      </span>
      <span className="MenuText">{text}</span>
    </div>
  )
}

const MenuItemsData = [
  {color: '#a8d79b', text: 'Activity', icon:  'timeline'},
  {color: '#45c8dc', text: 'Profile', icon: 'person'},
  {color: '#f22a15', text: 'Messages', icon: 'message'},
  {color: '#8459cc', text: 'Settings', icon: 'settings'},
]

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="SidebarTop">
        <Avatar
          src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
          name="dancounsell"
          size="100"
          status="KMPG"
          type="col"
        />
      </div>
      <div className="Menu">
        {
          MenuItemsData.map((e) => <MenuItem color={e.color} text={e.text} icon={e.icon} />)
        }
      </div>
    </div>
  );
}

export default Sidebar;
