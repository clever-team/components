import React, { Component, PropTypes } from 'react';
import css from 'importcss';
import { autobind } from 'core-decorators';

import NotificationList from './NotificationList';

import Bell from 'react-icons/lib/fa/bell';

@css(require('./Notifications.scss'))
export default class Notifications extends Component {

  static defaultProps = {
    notifications: [],
    listLength: 10,
  }

  static propTypes = {
    notifications: PropTypes.array,
    listLength: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      notifications: this.props.notifications,
    };
  }

  // componentDidMount() {
  //   this.loadNotificationsFromServer();
  //   // setInterval(this.loadNotificationsFromServer, this.props.pollInterval);
  // }

  // @autobind
  // loadCommentsFromServer() {
  //   // TODO: получить события
  //   this.setState({ notifications });
  // }

  @autobind
  handleNotificationListShow() {
    this.setState({ showList: !this.state.showList });
    // const stateCopy = Object.assign({}, this.state);
    // stateCopy.notifications.map((notification) => {
    //   notification.viewed = true;
    //   return notification;
    // });
    // setTimeout(function() {
    //   this.setState({ notifications: stateCopy.notifications });
    // }.bind(this), 3000);
    // TODO: изменения статуса на "Просмотрено" и отправка измененного статуса на сервер
  }

  render() {
    const { notifications, listLength } = this.props;
    const countNotViewed = notifications.length;
    const showList = this.state.showList;
    const notificationsList = showList ? <NotificationList listLength={listLength} notifications={notifications} /> : '';

    return (
      <div styleName="notification__container">
        <div styleName="notification__bell" onClick={this.handleNotificationListShow}>
          <Bell />
          <div>{}</div>
        </div>
        {notificationsList}
      </div>
    );
  }
}
