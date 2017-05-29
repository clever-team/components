import React from 'react';
import PropTypes from 'prop-types';
import Component from 'lsk-general/General/Component';
import _ from 'lodash';
import ReactImageFallback from 'react-image-fallback';

import defaultAvatar from './img/default-avatar.png';
import gifSpinner from './img/loading.gif';

export default class Avatar extends Component {

  static defaultProps = {
    title: '',
    name: '',
    src: '',
    avatar: '',

    size: 64,
    width: null,
    height: null,

    backgroundColor: '#9F9',
    textColor: '#FFF',
    textSizeRatio: 3,

    shape: 'circle',

    style: {},
    innerStyle: {},
    children: null,
  }

  static propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
    avatar: PropTypes.string,

    size: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,

    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    textSizeRatio: PropTypes.number,

    shape: PropTypes.oneOfType(['circle', 'square', 'rounded']),

    style: PropTypes.object,
    innerStyle: PropTypes.object,
    children: PropTypes.object,
  };

  getInnerStyle() {
    const {
      size,
      textSizeRatio,
      shape,
      backgroundColor,
      innerStyle,
      textColor,
    } = this.props;

    const src = this.props.src || this.props.avatar;

    const width = this.props.width || size;
    const height = this.props.height || size;

    const lineHeight = size;
    const fontSize = Math.floor(size / textSizeRatio);

    let borderRadius = 'none';
    if (shape === 'circle') {
      borderRadius = '50%';
    } else if (shape === 'rounded') {
      borderRadius = 6;
    }

    const style = src ? {
      boxSizing: 'border-box',
      maxWidth: '100%',
      objectFit: 'cover',
      overflow: 'hidden',
      width,
      height,
      borderRadius,
    } : {
      boxSizing: 'border-box',
      maxWidth: '100%',
      objectFit: 'cover',
      overflow: 'hidden',
      width,
      height,
      textAlign: 'center',
      fontFamily: 'Helvetica, Arial, sans-serif',
      borderRadius,
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
      backgroundColor,
      color: textColor,
    };

    return Object.assign(style, innerStyle);
  }

  renderAsImage() {
    const title = this.props.title || this.props.name;
    const src = this.props.src || this.props.avatar;

    return (
      <ReactImageFallback
        src={src}
        fallbackImage={defaultAvatar}
        initialImage={gifSpinner}
        style={this.getInnerStyle()}
        alt={title}
        title={title}
      />
    );
  }

  renderAsText() {
    const title = this.props.title || this.props.name;

    const initials = title
      .split(' ')
      .map(s => s.charAt(0))
      .join('');

    return (
      <div
        style={this.getInnerStyle()}
        alt={title}
        title={title}
      >
        {initials}
      </div>
    );
  }

  render() {
    const {
      size,
      style,
      children,
    } = this.props;

    const src = this.props.src || this.props.avatar;
    const width = this.props.width || size;
    const height = this.props.height || size;

    const wrapperStyle = Object.assign({
      display: 'inline-block',
      position: 'relative',
      width,
      height,
    }, style);

    return (
      <div
        style={wrapperStyle}
      >
        {src ? this.renderAsImage() : this.renderAsText()}
        { children }
      </div>
    );
  }
}

Avatar.Badge = function (props) {
  const offset = 0;
  const style = {
    position: 'absolute',
  };

  ['left', 'top', 'right', 'bottom'].forEach((dir) => {
    if (!props[dir]) return;
    if (typeof props[dir] === 'number') {
      style[dir] = props[dir];
    } else {
      style[dir] = offset;
    }
  });

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};
