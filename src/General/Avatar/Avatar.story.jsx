import React from 'react';
import Avatar from './Avatar';
import _ from 'lodash';

// const rndNum = _.random(99);
const avatarImg = `https://randomuser.me/api/portraits/men/${_.random(99)}.jpg`;
const smallImg = 'http://placeimg.com/32/32/people';
const largeImg = 'http://placeimg.com/1920/1920/people';
const noProportionalImg = 'http://placeimg.com/640/320/people';
// const image = 'http://placeimg.com/320/240/arch';

const user = () => ({
  name: 'John Smith',
  avatar: avatarImg,
});
const image = () => ({
  title: 'Architecture',
  src: 'http://placeimg.com/320/240/arch',
});

module.exports = function ({ storiesOf, action, knob }) {
  return storiesOf('Avatar', module)
    .add('Default as img', () => (
      <Avatar {...image()} />
    ))
    .add('Default as user', () => (
      <Avatar {...user()} />
    ))
    .add('Empty', () => (
      <Avatar />
    ))
    .add('No image', () => (
      <div>
        <Avatar name="John Smith" />
        <Avatar name="John Smith" textSizeRatio={2} />
        <Avatar name="John Smith" textSizeRatio={4} />
      </div>
    ))
    .add('Size', () => (
      <div>
        <Avatar {...user()} size={32} />
        <Avatar {...user()} size={64} />
        <Avatar {...user()} size={100} />
        <Avatar {...user()} width={100} height={50} />
        <Avatar {...user()} width={50} height={100} />
      </div>
    ))
    .add('Custom style', () => (
      <div>
        <Avatar {...user()} innerStyle={{ border: '2px solid #00BCD4' }} />
        <Avatar {...user()} innerStyle={{ border: '3px solid #4CAF50', padding: '2px' }} />
        <Avatar {...user()} innerStyle={{ border: '4px solid #F44336', padding: '3px' }} />
        <Avatar {...user()} style={{ boxShadow: '1px 1px 10px 2px #ccc' }} />
        <Avatar {...user()} innerStyle={{ boxShadow: '1px 1px 10px 2px #ccc' }} />
      </div>
    ))
    .add('Badge', () => (
      <div>
        <Avatar {...user()}>
          <Avatar.Badge right bottom>
            <div style={{ width: 10, height: 10, backgroundColor: '#4CAF50', borderRadius: '50%', border: '2px solid #fff' }} />
          </Avatar.Badge>
        </Avatar>

        <Avatar title="Offline Smith">
          <Avatar.Badge right bottom>
            <div style={{ width: 10, height: 10, backgroundColor: '#F44336', borderRadius: '50%', border: '2px solid #fff' }} />
          </Avatar.Badge>
        </Avatar>

        <Avatar>
          <Avatar.Badge left top >
            <div style={{ width: 10, height: 10, backgroundColor: '#4CAF50', borderRadius: '50%', border: '2px solid #fff' }} />
          </Avatar.Badge>
          <Avatar.Badge right top >
            <div style={{ width: 10, height: 10, backgroundColor: '#F44336', borderRadius: '50%', border: '2px solid #fff' }} />
          </Avatar.Badge>
          <Avatar.Badge left bottom >
            <div style={{ width: 10, height: 10, backgroundColor: '#03A9F4', borderRadius: '50%', border: '2px solid #fff' }} />
          </Avatar.Badge>
          <Avatar.Badge right bottom >
            <div style={{ width: 10, height: 10, backgroundColor: '#FFC107', borderRadius: '50%', border: '2px solid #fff' }} />
          </Avatar.Badge>
        </Avatar>

        <Avatar>
          <div style={{ width: 10, height: 10, backgroundColor: '#F44336', borderRadius: '50%', position: 'absolute', right: '24px', bottom: '24px', border: '2px solid #fff' }} />
        </Avatar>
      </div>
    ))
    .add('Shape', () => (
      <div>
        <Avatar {...user()} shape="circle" />
        <Avatar {...user()} shape="square" />
        <Avatar {...user()} shape="rounded" />
      </div>
    ))
    .add('Small avatar', () => (
      <Avatar name="John Smith" avatar={smallImg} />
    ))
    .add('Large avatar', () => (
      <Avatar name="John Smith" avatar={largeImg} />
    ))
    .add('Failed img', () => (
      <Avatar name="John Smith" avatar="/failed-img.png" />
    ))
    .add('No proportional', () => (
      <div>
        <Avatar name="John Smith" avatar={noProportionalImg} />
        <Avatar name="John Smith" avatar={noProportionalImg} width={128} height={64} />
        <Avatar name="John Smith" avatar={noProportionalImg} shape="rounded" width={128} height={64} />
      </div>
    ))
    .add('With tag a', () => (
      <a href="#"><Avatar {...user()} /></a>
    ))
    .add('Knobs', () => (
      <Avatar
        name={knob.text('Username', 'John Smith')}
        avatar={knob.text('User avatar URL', avatarImg)}
        title={knob.text('Image title', '')}
        src={knob.text('Image URL', '')}
        size={knob.number('Size', 64)}
        width={knob.number('Width')}
        height={knob.number('Height')}
        shape={knob.select('Shape', { cirlce: 'circle', rounded: 'rounded', square: 'square' }, 'circle')}
        backgroundColor={knob.color('Background color')}
        textColor={knob.color('Text color')}
        textSizeRatio={knob.number('Text size ratio')}
        style={knob.object('Style', { padding: '10px' })}
        innerStyle={knob.object('Inner style', {})}
      />
    ));
};
