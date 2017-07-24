import React, { Component } from 'react';
import './Userlists.css'
import Avatar from '../../components/Avatar'

const UserListData = [
  {img: 'https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg', name: '@zeldman', status: 'online'},
  {img: 'https://s3.amazonaws.com/uifaces/faces/twitter/faulknermusic/128.jpg', name: '@faulknermusic', status: 'online'},
  {img: 'https://s3.amazonaws.com/uifaces/faces/twitter/iannnnn/128.jpg', name: '@iannnnn', status: 'active'},
  {img: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg', name: '@jsa', status: 'active'},
  {img: 'https://s3.amazonaws.com/uifaces/faces/twitter/zack415/128.jpg', name: '@zack415', status: 'offline'},
  {img: 'https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg', name: '@abinav_t', status: 'offline'},
  {img: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg', name: '@jadlimcaco', status: 'offline'},
  {img: 'https://s3.amazonaws.com/uifaces/faces/twitter/iflendra/128.jpg', name: '@iflendra', status: 'online'},
  {img: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg', name: '@calebogden', status: 'active'}
]

const Userlists = () => {
  return (
    <div className="Userlists">
      <div className="Search">
        <input className="SearchInput" type="search" placeholder="Search contact" />
      </div>
        {
          UserListData.map((e) => <div className="UserItem"><Avatar
            src={e.img}
            name={e.name}
            status={e.status}
          /></div>)
        }
    </div>
  );
}

export default Userlists;
