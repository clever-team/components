import React, { Component, PropTypes } from 'react';
import PushMessage from './PushMessage'
import userImageFile from './public/user_avatar.png';
import Avatar from '../Avatar'

module.exports = ({ storiesOf, action }) => {
    const onlineUser = {
        avatar: userImageFile,
        fullName: 'Валентин Самойлов',
        online: true
    }
    const offlineUser = {
        avatar: userImageFile,
        fullName: 'Валентин Самойлов',
        online: false
    }
    return storiesOf('PushMessage', module)
        .add('PushMessage comment', () => {
            
            return (
                <div style={{width: '20em'}}>
                    <PushMessage user={onlineUser}>
                            <strong>Валентин Самойлов</strong> прокомментировал вашу сделку <a href="#">Преролл для ролика</a>
                    </PushMessage>
                </div>
            )
            
        })  
        .add('PushMessage comment with ellipsis', () => {
            
            return (
                <div style={{width: '20em'}}>
                    <PushMessage user={onlineUser}>
                            <strong>Валентин Самойлов</strong> прокомментировал вашу сделку <a href="#">Преролл для ролика</a> Этот текст долже показываться с многоточием
                    </PushMessage>
                </div>
            )
            
        })  
        .add('PushMessage comment offline', () => {
            
            return (
                <div style={{width: '20em'}}>
                    <PushMessage user={offlineUser}>
                            <strong>Валентин Самойлов</strong> прокомментировал вашу сделку <a href="#">Преролл для ролика</a>
                    </PushMessage>
                </div>
            )
            
        })  
};