import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import * as firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';
import Facebook_Btn from './facebookbtn';



class Nav_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    passinguser = (value) => {
        this.props.logginguser(value)
        // console.log(value)
    }

    render() {
        return(
            <div>
                <AppBar title="recruitment system"
                iconElementRight={  <Facebook_Btn logginguser={this.passinguser} updateduser={this.props.updateduser} changing_fb_btn_view={this.props.changing_fb_btn_view}  />}
                />
            </div>
        )
    }
}

export default Nav_Bar;