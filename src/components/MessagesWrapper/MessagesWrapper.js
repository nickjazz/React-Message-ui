import React, { Component } from 'react';
import Avatar from '../../components/Avatar'

import './MessagesWrapper.css'

class MessagesWrapper extends Component {

  render() {
    return (
      <div className="MessagesWrapper">
        <div className="Messagesitems">
          <div className="Messagesitem me">
            <Avatar
              size="40"
              src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
            />
            <div className="MessageTexts">
              <div className="MessageText">Hello Jason</div>
              <div className="MessageText">How are you</div>
              <div className="MessageText">it's been a long time since we last met?</div>
            </div>
          </div>

          <div className="Messagesitem">
            <Avatar
              size="40"
              src="https://s3.amazonaws.com/uifaces/faces/twitter/ritu/128.jpg"
            />
            <div className="MessageTexts">
              <div className="MessageText">Oh, hi Sarah I'm have got a new job now and is going great. How about you?</div>
            </div>
          </div>

          <div className="Messagesitem me">
            <Avatar
              size="40"
              src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
            />
            <div className="MessageTexts">
              <div className="MessageText">Hello Jason</div>
              <div className="MessageText">I have been so busy with my new job that</div>
              <div className="MessageText">I have not had the time to do much else</div>
              <div className="MessageText">but otherwise, me and the family are all fine.</div>
            </div>
          </div>

          <div className="Messagesitem me">
            <Avatar
              size="40"
              src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
            />
            <div className="MessageTexts">
              <div className="MessageText">Hello Jason</div>
              <div className="MessageText">How are you, it's been a long time since we last met?</div>
            </div>
          </div>
        </div>

        <div className="MessageForm">
          <textarea className="MessageTextarea" placeholder="Reply to Katy.." />
          <button className="MessageSendButton" >
            <i className="material-icons">send</i>
          </button>
        </div>
      </div>
    );
  }

}

export default MessagesWrapper;
