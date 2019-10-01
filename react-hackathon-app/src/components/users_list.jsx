import React, { Component } from 'react';
import '../index.css';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';
import ContentSend from 'material-ui/svg-icons/content/send';   
import Chip from 'material-ui/Chip';

const styles = {
    chip: {
      margin: 4,
      
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };

class Users_list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: 'hidden',
            reciever_name: '',
            reciever_url: '',
            reciever_uid: '',
            message_Textfield: '',
            // messages_list : this.props.updated_messages_list.messages,
        }
    }

    componentWillMount() {
        
        var that = this;
        // getting users list from firebase
        var ref = firebase.database().ref("/users/");
        ref.on("value", (snapshot) => {
            // console.log(snapshot.val())
            var key = snapshot.key; // "ada"
            var data = snapshot.val()
            // console.log(data)
            //passing an array
          var dataArray = [];
          for(var key in data) {
            
            // console.log(data[key])
            dataArray.push(data[key]);
            

            }
            // console.log(dataArray)
            // passing data to redux
            that.props.updateduserlist(dataArray);
          });
          
          
    }
    // reciever_chatbox = (value, index) => {
        
    //     // console.log(value);
    //     // console.log(index);
    //     this.setState({visibility: 'visible',
    //                    reciever_name: value.userName,
    //                    reciever_uid: value.userUID,
    //                    reciever_url: value.imageURL
    //                 },() => {
    //                     // ascicrinus state call
    //                       // bringing data from firebase of particular chater to redux
    //                 var that= this;
    //                 firebase.database().ref("/messages_list/").on("value", (snapshot) => {
    //                     // console.log(snapshot.val())
    //                     // console.log(snapshot.val().sender_uid)
    //                     // console.log(snapshot.val().reciever_uid)
    //                     // console.log(this.props.currentUser_info.Loged_in_user.userUID)
    //                     // console.log(this.state.reciever_uid)
    //                     // if(snapshot.val().sender_uid === that.props.currentUser_info.Loged_in_user.userUID && snapshot.val().reciever_uid === that.state.reciever_uid) {
                          
    //                         // console.log(snapshot.val().message)
    //                         var data = snapshot.val();
    //                         var passing_data = [];
    //                         // console.log(data);
    //                         for (var key in data) {
                                
    //                                 // console.log(key);
                                    
    //                                 var obj = data[key]    
    //                                 // console.log(obj.reciever_uid );  
    //                                 if(obj.sender_uid === that.props.currentUser_info.Loged_in_user.userUID && obj.reciever_uid === that.state.reciever_uid) 
    //                                 {
    //                                     passing_data.push(obj)
                                            
                                        
    //                                 }   
    //                                 if(obj.sender_uid === that.state.reciever_uid && obj.reciever_uid === that.props.currentUser_info.Loged_in_user.userUID) 
    //                                 {
    //                                     passing_data.push(obj)
                                            
                                        
    //                                 }                             
    //                         }
    //                         // console.log(passing_data);
    //                         // sending message data to redux store
    //                          this.props.updating_msg_list(passing_data);
                            
                            
                        
                       
    //                 })
    //                 }
    //                 );
                    
                    
                    
                    
      
    // }
    // message_Text_handler = (ev) => {
    //     this.setState({message_Textfield : ev.target.value})
    // }
    // send_message = () => {
    //     // console.log(this.state.message_Textfield)
    //     this.setState({message_Textfield : ''})
    //     // sending message to firebase
    //     var msg_with_data = {
    //         message: this.state.message_Textfield,
    //         sender_uid: this.props.currentUser_info.Loged_in_user.userUID,
    //         reciever_uid: this.state.reciever_uid,
    //     }
    //     // console.log(msg_with_data)
    //     var database = firebase.database();
    //     database.ref('/messages_list/').push(msg_with_data);
    // }

    render() {
        // var msg = this.props.updated_messages_list.messages;
        // console.log(msg)
        return(
            <div>
                 <div className='chatdiv1'>
                     <div className='chatdiv1_1'>
                    <List>
                    <Subheader>Active Users</Subheader>
                        {/* showing data from redux to dashboard */}
                        {
                           this.props.passing_userlist.Users_list.map(
                               (value, index) => {
                                // console.log(index);
                                // console.log(value);
                                // console.log(this.props.currentUser_info.Loged_in_user.userUID);
                                

                                    if (this.props.currentUser_info.Loged_in_user.userUID === value.userUID) {
                                        return(       
                                      console.log(this.props.passing_userlist)

                                        // console.log(`my id`)
                                        )
                                    }
                                    else{
                                        return(
                                            <ListItem
                                        primaryText={value.userName}
                                        leftAvatar={<Avatar src={value.imageURL} />}
                                        rightIcon={<CommunicationChatBubble />}
                                        key={index}
                                     
                                         />
                                        )}}) 
                        }
                    </List>
                    </div>
                </div>
                {/* <div className='chatdiv2' style={{visibility: this.state.visibility}}>
                <div className='reciever_name'>
                {this.state.reciever_name}
                    <div className='reciever-img'>
                        <Avatar src={this.state.reciever_url} size='47' className='imgs1' />
                    </div>
                </div>
                <div className='chatdiv2_1'>
                    <div style={{position: 'static', margin: '20px'}}> */}
                    
                        {
                        // msg.map(
                        //     (value, index) => {
                        //         // console.log(index)
                        //         // console.log(value)
                        //         if(value.sender_uid === this.props.currentUser_info.Loged_in_user.userUID) {
                        //             return(
                        //                 <div style={{width: '100%'}}>
                        //             {/* <p style={{ }} className='msg_sender'>{value.message}</p> */}
                        //             <Chip
                                    
                        //             style={{marginTop: '5px', textAlign: 'left'}}
                        //             backgroundColor= '#00a5ff'
                        //             labelColor='white'
                        //             >
                        //             {value.message}
                        //             </Chip>
                                    
                        //             </div>
                        //         )
                        //         }
                        //         else{
                        //             return(
                        //                 <div style={{width: '100%',}}>
                        //             {/* <p style={{ }} className='msg_sender'>{value.message}</p> */}
                        //             <Chip
                                    
                        //             style={{marginTop: '5px', textAlign: 'right', }}
                        //             backgroundColor= 'white'
                        //             labelColor='#00a5ff'
                        //             >
                        //             {value.message}
                        //             </Chip>
                                    
                        //             </div>
                        //         //         <div style={{width: '100%',  }}>
                        //         //    {/* <p style={{float: 'right'}} className='msg_reciever'>{value.message}</p> */}
                        //         //     <p style={{visibility:'hidden' }}>extra</p>
                        //         //      <Chip
                        //         //      style={{marginTop: '5px', textAlign: 'right', float:'right', position:'relative', top: '-38px'}}
                        //         //     labelColor='#00a5ff'
                        //         //     backgroundColor= 'white'
                        //         //     className='msg_reciever'
                        //         //     >
                        //         //     {value.message}
                        //         //     </Chip>
                                    
                        //         //     </div>
                        //         )
                        //         }
                               
                            }
                        {/* )
                  
                    }    
                
                </div>
                </div>
                <div className='sub_div'>
                <div className='sender-img'>
                    <Avatar src={this.props.currentUser_info.Loged_in_user.imageURL} size='52px' className='imgs' />
                </div>
                <TextField
                hintText="here"
                floatingLabelText="Type message"
                floatingLabelStyle={{color: 'white'}}
                className='textfield1'
                value={this.state.message_Textfield}
                onChange={this.message_Text_handler}
                />
                <div className='send_btn'>
                    <ContentSend onClick={this.send_message} />
                </div>
                </div> */}
            {/* </div> */}
            
            </div>
        )
    }
}

export default Users_list;