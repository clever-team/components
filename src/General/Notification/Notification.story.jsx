import React from 'react';
import NotificationList from './NotificationList';
import NotificationBox from './NotificationBox';
import Notification from './Notification';
import take from 'lodash/take';

const notifications = [{
  id: 1,
  content: (<div>notification1</div>),
},
{
  id: 2,
  content: (<div>notification2</div>),
},
{
  id: 3,
  content: (<div>notification3</div>),
},
{
  id: 4,
  content: (<div>notification4</div>),
},
{
  id: 5,
  content: (<div>notification5</div>),
}];
const oneNotification = take(notifications, 1);
const twoNotifications = take(notifications, 2);

module.exports = function ({ storiesOf }) {
  return storiesOf('Notification', module)
    .add('NotificationBox default', () => (
      <NotificationBox notifications={notifications} />
    ))
    .add('Default list', () => (
      <NotificationList notifications={notifications} />
    ))
    .add('Empty list', () => (
      <NotificationList notifications={[]} />
    ))
    .add('One notification in list', () => (
      <NotificationList notifications={oneNotification} />
    ))
    .add('Two notifications in list', () => (
      <NotificationList notifications={twoNotifications} />
    ))
    .add('Showing three notifications in list', () => (
      <NotificationList showCount={3} notifications={notifications} />
    ))
    .add('Notification content', () => (
      <Notification content={<div>Simple notification content</div>} />
    ));
};
