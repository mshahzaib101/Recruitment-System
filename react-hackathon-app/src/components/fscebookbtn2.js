import React, { Component } from 'react';
import * as firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import history from '../history';
const style = {
  
};

class Facebook_Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    login = () => {
        var that = this;
        // firebase facebook login
        // Sign in using a popup.
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('public_profile');
        firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token.
         var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // firebase facebook login
        
        // console.log(user)
        // that.setState({userInfo : {
        //     userName: user.displayName,
        //     email: user.email,
        //     imageURL: user.photoURL,
        //     userUID: user.uid
        // }})
        // // that.props.history.push('/dashboard');
        // console.log(that.state.userInfo);

        var Loged_in_user = {
            userName: user.displayName,
            email: user.email,
            imageURL: user.photoURL,
            userUID: user.uid
        }
        //  console.log(that.props);
        //passing logged user to redux
        that.props.logginguser(Loged_in_user)
        // console.log(that.props.updateduser.Loged_in_user)
        //pushing user data in firebase database
        var database = firebase.database();
        database.ref('/users/' + user.uid + '/').set(that.props.updateduser.Loged_in_user);
        // //pushing user data in firebase database

        // //hiding fb btn
        that.props.changing_fb_btn_view(true);
        // changing route
        history.push('/dashboard');
        

        });}
    
        logout = () => {
            var that = this;
            // logging user signout
            firebase.auth().signOut().then(function() {
            // Sign-out successful.
            // //hiding fb btn
            that.props.changing_fb_btn_view(false);
            // changing route
            history.push('/');

            }).catch(function(error) {
            // An error happened.
            });
        }
    
    render() {
        if(this.props.updateduser.user_is_logged_in === false) {
            return(
        <RaisedButton label="Login With Facebook" primary={true} onClick={this.login} style={{marginTop: 6,}} />
    )}
        else{
            return(
                <ListItem
                disabled={true}
                leftAvatar={
                <Avatar src={this.props.updateduser.Loged_in_user.imageURL} />
                    } 
                    rightIcon={
                    // menue icon
                                    <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    style={{marginTop: -1,}}
                    >
                    <MenuItem primaryText="Send feedback" />
                    <MenuItem primaryText="Sign out" onClick={this.logout} />
                    </IconMenu>

                    }
                    >
                    {this.props.updateduser.Loged_in_user.userName}
                 </ListItem>
    
            )
        }
    }

}

export default Facebook_Btn;