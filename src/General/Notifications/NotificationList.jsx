import React, { Component, PropTypes } from 'react';
import css from 'importcss';
import { autobind } from 'core-decorators';
import take from 'lodash/take';

import Notification from './Notification';
import A from '../A';

import plural from './utils/plural';

@css(require('./Notifications.scss'))
export default class NotificationList extends Component {

  static defaultProps = {
    listLength: 10,
  }

  static propTypes = {
    listLength: PropTypes.number,
    notifications: PropTypes.array.isRequired,
  };

  @autobind
  handleClickToLink(e) {
    e.preventDefault();
    console.log('Поздравляю, вы перешли по ссылке');
  }

  render() {
    const {
      listLength,
      notifications,
    } = this.props;
    const visibleNotifications = take(notifications, listLength);
    const eventCount = notifications.length;

    return (
      <div styleName="notification__list__container">
        <div styleName="notification__arrow-up" />
        <div styleName="notification__content">
          <If condition={eventCount === 0}>
            <div styleName="notification__list__header">{'Нет событий'}</div>
          </If>
          <If condition={eventCount !== 0}>
            <div styleName="notification__list__header">
              {`${eventCount} ${plural(eventCount, 'событие', 'события', 'событий')}`}
            </div>
            {<div styleName="notification__list__content">
              {visibleNotifications.map(notification =>
                <Notification
                  key={notification.id}
                  viewed={notification.viewed}
                >
                  {notification.content}
                </Notification>,
              )}
            </div>}
          </If>
          <If condition={eventCount > listLength}>
            <div styleName="notification__list__footer">
              <A onClick={this.handleClickToLink} href="/cabinet/notifications">Все сообщения</A>
            </div>
          </If>
        </div>
      </div>
    );
  }
}
