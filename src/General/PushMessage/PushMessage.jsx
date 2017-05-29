import React, { Component, PropTypes } from 'react';

import _ from 'lodash'
import importcss from 'importcss'
import classnames from 'classnames'
import { autobind } from 'core-decorators'

//import MdThumbUp from 'react-icons/lib/md/thumb-up'
//import FaMailReply from 'react-icons/lib/fa/mail-reply'
//import FaBan from 'react-icons/lib/fa/ban'
//import FaEdit from 'react-icons/lib/fa/edit'
//import FaCheck from 'react-icons/lib/fa/check'
//import FaComment from 'react-icons/lib/fa/comment'

//import TimeAgo from 'react-timeago'
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
    //cut: PropTypes.number,
    action: PropTypes.number.isRequired,
    //content: PropTypes.string.isRequired
    children: React.PropTypes.any
  }

  //Returns 30 symbols of cutted message content
  @autobind
  cutLink(message) {
    var result = [];
    if (message) {
      //check for links
      var pos = message.indexOf('<a href=');
      //var re = /\<a href\=[.]+\>/;
      //var found = re.match(message);
      if (pos !== -1) {
        if (pos !== 0) {
          result['start'] = message.slice(0, pos);
        }
        var tmp = message.slice(pos, message.length).replace('<a href=', '');
        pos = tmp.indexOf('>');
        var link = tmp.slice(0, pos-1);
        tmp = tmp.slice(pos, tmp.length);
        pos = tmp.indexOf('</a>');
        var end = tmp.slice(pos, tmp.length);
        tmp = tmp.slice(0, pos);
        result['link']='<a href=' + link + '>' + tmp.slice(0, 26) + ' ...</a>';//cut 26 first symbols
        if (end) {
          result['end'] = end;
        }
      }
    }
    return result;
  }

  render() {
    //if (this.props.cut === 1) {
      const msgArr = this.cutLink(this.props.children);
    //}
    var action = this.props.action,
      user = this.props.user,
      content;
    if (!msgArr || !msgArr.length) return;//nothing to render
    switch (action) {
      // comment
      case 1:
        content = 'Прокомментировал вашу сделку ' + msgArr['link'];
        break;
      // agree
      case 2:
        content = 'Принял вашу сделку ' + msgArr['link'];
        break;
      //ends
      case 3:
        content = 'Ваша сделка ' + msgArr['link'] +' скоро истекает';
        if (msgArr['end']) {
          content += ', ' + msgArr['end'];
        }
        break;
      default:
        content = 'This is don\'t known action';
    }
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
            /*{this.props.children}*/
            <If condition={user}>
              <strong>{user}</strong>{'&nbsp;'}
            </If>
            {content}
        </div>
      </div>
    )
  }
}

/*<Avatar.Badge right bottom>
              <div styleName="push_message__avatar-badge-online"></div>
            </Avatar.Badge>            */
