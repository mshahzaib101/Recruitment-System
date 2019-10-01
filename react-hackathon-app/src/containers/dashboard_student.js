import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import Nav_Bar from '../components/navbar';
import users from '../store/actions/users';
import Users_list from '../components/users_list';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as firebase from 'firebase';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';


// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        currentUser : state.Loged_in_user,
        updated_user_list : state.Updating_chat_list,
        updated_company_profile_list : state.Updating_list_of_profilies.company_profilies
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
        },
        updateduserchatlist : (value) => {
            return dispatch(users.updateduserChatlist(value));
        },
        updated_companyprofile_list: (value) => {
            return dispatch(users.updatedcompanyprofilelist(value));
        },
        
       
    };
}

class Dashboard_Student extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open_modal: false,
            // modal data
                Name: this.props.currentUser.Loged_in_user.userName,
                email: '',
                contact: '',
                qualification: '',
                age: '',
                specialskills : '',
                why_we_choose_you: '',
                last_year_grades: '',
                imageURL: this.props.currentUser.Loged_in_user.imageURL,
                userUID: this.props.currentUser.Loged_in_user.userUID,
                userType: this.props.currentUser.Loged_in_user.userType,
                // modal data
            
        }
    }

     Logging_user_in = (value) => {
        this.props.logging_user(value);
      }
    
      changing_fb_btn = (value) => {
        this.props.changing_fb_btn(value);
      }

      updateduserlistt = (value) => {
        this.props.updateduserchatlist(value);
      }

      handleOpen = () => {
        this.setState({open_modal: true});
        };

        handleClosefully = () => {
            this.setState({open_modal: false});
        }

         handleClose = () => {
         this.setState({open_modal: false});
            // setting data
            var user_profile_data = {
                name: this.state.Name,
                email: this.state.email,
                contact: this.state.contact,
                imageURL: this.state.imageURL,
                userUID: this.state.userUID,
                userType: this.state.userType,
                qualification: this.state.qualification,
                age: this.state.age,
                specialskills : this.state.specialskills,
                why_we_choose_you: this.state.why_we_choose_you,
                last_year_grades: this.state.last_year_grades,
            }
            // console.log(user_profile_data)
            // sending data to firebase
            var database = firebase.database();
            database.ref('/students_profile/').push(user_profile_data);

         };

         name_handler = (ev) => {
            
            this.setState({Name: ev.target.value})
         }
         
         email_handler = (ev) => {
            this.setState({email: ev.target.value})
         }
         
         contact_handler = (ev) => {
            this.setState({contact: ev.target.value})
         }

         qualification_handler = (ev) => {
            this.setState({qualification: ev.target.value})
         }
         
         age_handler = (ev) => {
            this.setState({age: ev.target.value})
         }
         
         specialskills_handler = (ev) => {
            this.setState({specialskills: ev.target.value})
         }
         
         why_we_choose_you_handler = (ev) => {
            this.setState({why_we_choose_you: ev.target.value})
         }

         last_year_grades = (ev) => {
            this.setState({last_year_grades: ev.target.value})
         }
         
         componentWillMount() {
             var that= this;     
             // getting data from firebase
             var ref = firebase.database().ref("/company_profile/");

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
            console.log(dataArray)
            // passing data to redux
            that.props.updated_companyprofile_list(dataArray);
          });
         }

    render() {
        const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClosefully}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
        return(
            <div>
              <Nav_Bar logginguser={this.Logging_user_in} updateduser={this.props.currentUser} changing_fb_btn_view={this.props.changing_fb_btn} />
              {/* <Users_list updateduserlist={this.updateduserlistt} passing_userlist={this.props.updated_user_list} currentUser_info={this.props.currentUser} /> */}
            {/* modal */}

            <div>
        <RaisedButton label="Create your profile" onClick={this.handleOpen} />
        <Dialog
          title="CreateYour Profile"
          actions={actions}
          modal={true}
          open={this.state.open_modal}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          {/* form */}

            Name: <TextField
            hintText="profile_name"
            floatingLabelText="profile_name"
            value={this.state.Name}
            onChange={this.name_handler}
            /><br />
            email: <TextField
            hintText="student_email"
            floatingLabelText="student_email"
            value={this.state.email}
            onChange={this.email_handler}
            /><br />
            contact: <TextField
            hintText="student_no"
            floatingLabelText="student_no"
            value={this.state.contact}
            onChange={this.contact_handler}
            type='number'
            /><br />
            Qualification: <TextField
            hintText="student_Qualification"
            floatingLabelText="student_Qualification"
            value={this.state.qualification}
            onChange={this.qualification_handler}
            /><br />
            Age: <TextField
            hintText="student_age"
            floatingLabelText="student_age"
            value={this.state.age}
            onChange={this.age_handler}
            type='number'
            /><br />
            Special skills: <TextField
            hintText="student_specialskills"
            floatingLabelText="student_specialskills"
            value={this.state.specialskills}
            onChange={this.specialskills_handler}
            /><br />
            why We Choose You: <TextField
            hintText="student_why_we_choose_you"
            floatingLabelText="student_why_we_choose_you"
            value={this.state.why_we_choose_you}
            onChange={this.why_we_choose_you_handler}
           
            /><br />
            Last year grades: <TextField
            hintText="student_last_year_grades"
            floatingLabelText="student_last_year_gradesu"
            value={this.state.last_year_grades}
            onChange={this.last_year_grades}
            
            /><br />
        </Dialog>
      </div>
      <div>
      <Subheader>Vaccants avaliable</Subheader>
            {/* company jobs list */}
        {console.log(this.props.updated_company_profile_list)}

            
{
    this.props.updated_company_profile_list.map(
        (value, index) => {
            return(
                // console.log(value)
                <Card style={{backgroundColor: '#e0e8ff', marginTop: '50px'}}>
                <CardHeader
                  title={value.CompanyName}
                  subtitle={value.Companyemail}
                  avatar={value.imageURL}
                />
                <CardTitle title={value.job_specification} subtitle={`${value.No_of_employes_required} posts avaliable`} />
                <CardText>
                {value.job_description}
                </CardText>
                <CardActions style={{fontWeight : '200'}}>
                  <h5>Age-limit: {value.age_limit}</h5>
                  <h5>last date to apply: {value.When_required}</h5>
                  <h5>Contact: {value.contact}</h5>
                </CardActions>
              </Card>
            
            )
        }
    )
}


      </div>
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard_Student);