import React from 'react';
import PushList from './PushList';
import NotificationBox from './NotificationBox';
//import Notification from './Notification';
import PushMessage from '../PushMessage';
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
  return storiesOf('PushList', module)
    .add('NotificationBox default', () => (
      <NotificationBox notifications={notifications} />
    ))
    .add('Default list', () => (
      <PushList notifications={notifications} />
    ))
    .add('Empty list', () => (
      <PushList notifications={[]} />
    ))
    .add('One notification in list', () => (
      <PushList notifications={oneNotification} />
    ))
    .add('Two notifications in list', () => (
      <PushList notifications={twoNotifications} />
    ))
    .add('Showing three notifications in list', () => (
      <PushList showCount={3} notifications={notifications} />
    ))
    .add('Notification content', () => (
      <PushMessage>
        {<div>Simple notification content</div>}
      </PushMessage>
    ));
};
