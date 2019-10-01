import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import Nav_Bar2 from '../components/navbar_homepage';
import users from '../store/actions/users';
import img1 from '../images/img1.PNG';
import * as firebase from 'firebase';
import Facebook_Btn from '../components/facebookbtn';


// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
      updateduser : state.Loged_in_user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // increment: () => dispatch(CounterAction.increment()),
        logging_user : function (value){
          return dispatch(users.logged_in_user_meh(value));
        },
        changing_fb_btn : function (value){
          return dispatch(users.changing_fb_btn(value));
        }
    };
}

class Home_page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      upload: null,
    }
  }

  Logging_user_in = (value) => {
    this.props.logging_user(value);
  }

  changing_fb_btn = (value) => {
    this.props.changing_fb_btn(value);
  }
 
  render() {
    return (
      <div >
            <Nav_Bar2 />
     <div style={{width : '50%'}}>
      <img src={img1} className='img1' style={{height: 600, width: 750,  }} />
      </div>
      <div style={{fontSize: '44px',
                   fontWeight: 700,
                   fontFamily: 'Trenda-Black',
                   lineHeight: 1.25,
                   position: 'relative',
                   left: '818px',
                   top: '-500px',
                   color: '##435662',
                   }}>
                   Want to be recruit<br />
      Join today and 
      <p 
      style={{fontSize: '30px',
                   fontWeight: 600,
                   fontFamily: 'Trenda-Black',
                   fontStyle: 'italic',
                   color: '##435662',
                   marginTop:'5px'
                   }}
      
      >get a job!</p>
      <Facebook_Btn textshown='login as Student' logginguser={this.Logging_user_in} updateduser={this.props.updateduser} changing_fb_btn_view={this.props.changing_fb_btn}  />
      <br />
      <Facebook_Btn textshown='login as Company' logginguser={this.Logging_user_in} updateduser={this.props.updateduser} changing_fb_btn_view={this.props.changing_fb_btn}  />
      <br />
      <Facebook_Btn textshown='login as Admin' logginguser={this.Logging_user_in} updateduser={this.props.updateduser} changing_fb_btn_view={this.props.changing_fb_btn}  />

      </div>
      
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home_page);
