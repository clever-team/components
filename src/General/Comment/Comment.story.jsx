import React, { Component, PropTypes } from 'react';
import {Comment, CommentForm} from './Comment'
import userImageFile from './public/user_avatar.png';




module.exports = ({ storiesOf, action }) => {
  return storiesOf('Comment', module)
    .add('Standart comment', () => {
        let commentProps = {
            userId: 1,
            avatarSrc: userImageFile,
            userName: 'John Doe',
            text: `
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            `,
            // ? Content
            // ? images / attachments (?)
            //  ? подумать про упомянания 
            repliesCount: 0,
            onReplyClick:  action('On Reply'),
            likesCount: 0,
            onLikeClick: action('On Like'),
            date: new Date((new Date).getTime() - 3600*1000),
            onReport:  action('On Report'),
            // ? редактирование что должно происходить при onEditClick?
            isEditable: false            
        }
        return <Comment {...commentProps}></Comment>
    })  
    
    .add('Editable Form', () => {

        class CommentTest extends Component {
            
            constructor(){
                super()
                this.state = {
                    commentProps: {
                        userId: 1,
                        avatarSrc: userImageFile,
                        userName: 'John Doe',
                        text: `
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        `,
                        // ? Content
                        // ? images / attachments (?)
                        //  ? подумать про упомянания 
                        repliesCount: 0,
                        onReplyClick:  action('On Reply'),
                        likesCount: 0,
                        onLikeClick: action('On Like'),
                        date: new Date((new Date).getTime() - 3600*1000),
                        onReport:  action('On Report'),
                        // ? редактирование что должно происходить при onEditClick?
                        isEditable: true,
                        onSave: (htmlValue) => {
                            this.setState({commentProps: Object.assign({}, this.state.commentProps, {text: htmlValue})})
                            action('On Save')(htmlValue)
                        },
                    }
                }
            }

            render(){
                return <Comment {...this.state.commentProps}></Comment>
            }
        }


        return <CommentTest></CommentTest>
    })  

    // .add('Nothing Form', () => (
    //     <CommentForm></CommentForm>
    // ))  

};