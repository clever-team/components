import React from 'react';
import PropTypes from 'prop-types';
import Component from 'lsk-general/General/Component';
import css from 'importcss';

@css(require('./Notification.scss'))
export default class Notification extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
  };

  render() {
    const content = this.props.content;

    return (
      <div styleName="notification">
        { content }
      </div>
    );
  }
}
