import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import * as firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';
import Facebook_Btn from './facebookbtn';



class Nav_Bar2 extends Component {
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
                />
            </div>
        )
    }
}

export default Nav_Bar2;