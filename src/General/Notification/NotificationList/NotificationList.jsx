import React from 'react';
import PropTypes from 'prop-types';
import Component from 'lsk-general/General/Component';
import Notification from '../Notification';
// import cx from 'classnames';
import css from 'importcss';
import { autobind } from 'core-decorators';
import take from 'lodash/take';
import plural from './plural';

@css(require('../Notification.scss'))
export default class NotificationList extends Component {

  static defaultProps = {
    showCount: 4,
  }

  static propTypes = {
    showCount: PropTypes.number,
    notifications: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
    };
  }

  @autobind
  handleNotificationsShow(e) {
    e.preventDefault();
    this.setState({ showAll: true });
  }

  render() {
    const {
      showCount,
      notifications,
    } = this.props;

    const showAll = this.state.showAll;

    const visibleNotifications = showAll ? notifications : take(notifications, showCount);

    const notificationNodes = visibleNotifications.map(notification =>
      (
        <div key={notification.id}>
          <Notification content={notification.content} />
        </div>
      ),
    );

    const eventCount = notifications.length;
    const eventCountTxt = eventCount === 0 ? 'Нет событий' : `${eventCount} ${plural(eventCount, 'событие', 'события', 'событий')}`;
    const notificationList = eventCount === 0 ? '' : (<div styleName="notification__list__content">{notificationNodes}</div>);
    const footer = eventCount > showCount && !showAll ? (<div styleName="notification__list__footer"><a onClick={this.handleNotificationsShow}>Все сообщения</a></div>) : '';

    return (
      <div styleName="notification__list__container">
        <div styleName="notification__list__header">{eventCountTxt}</div>
        {notificationList}
        {footer}
      </div>
    );
  }
}
