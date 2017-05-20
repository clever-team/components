import React, { Component, PropTypes } from 'react';

import _ from 'lodash'
import importcss from 'importcss'
import classnames from 'classnames'

import MdThumbUp from 'react-icons/lib/md/thumb-up'
import FaMailReply from 'react-icons/lib/fa/mail-reply'
import FaBan from 'react-icons/lib/fa/ban'
import FaEdit from 'react-icons/lib/fa/edit'
import FaCheck from 'react-icons/lib/fa/check'
import FaComment from 'react-icons/lib/fa/comment'

import TimeAgo from 'react-timeago'
import ruStrings from 'react-timeago/lib/language-strings/ru'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

import Avatar from '../Avatar'

const DATE_FORMATTER = buildFormatter(ruStrings)

@importcss(require('./PushMessage.scss'))
export default class PushMessage extends Component {
  
  constructor(){
    super()
    this.state = {}
  }

  static defaultProps = {
    
  }

  static propTypes = {
    user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        online: PropTypes.bool.isRequired
    }),
    children: React.PropTypes.any
  }
  render() { 
    
    const renderBadge = () =>{
      return this.props.user.online 
      ?<div styleName="push_message__avatar-badge-online" />
      :<div styleName="push_message__avatar-badge-offline" />
    }
    const badgeClass = `push_message__avatar-badge-${this.props.user.online ? 'on' : 'off'}line`
    const badgeStyle={ 
      width: 10, 
      height: 10, 
      backgroundColor: this.props.user.online ? '#4CAF50' : '#F44336', 
      borderRadius: '50%', 
      position: 'absolute', right: '0px', bottom: '0px', 
      border: '2px solid #fff' 
    }
    
    return (
      <div styleName="push_message">

        <div styleName="push_message__avatar">  
          <Avatar src={this.props.user.avatar} title={this.props.user.fullName} size={50} badgeContent={<div style={badgeStyle} />}>
          </Avatar>
        </div>
        <div styleName="push_message__text">
            {this.props.children}
        </div>
      </div>
    ) 
  }
}

/*<Avatar.Badge right bottom>
              <div styleName="push_message__avatar-badge-online"></div>
            </Avatar.Badge>            */