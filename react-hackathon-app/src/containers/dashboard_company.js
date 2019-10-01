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
        updated_students_profile_list : state.Updating_list_of_profilies.students_profilies

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
        updated_studentsprofile_list: (value) => {
            return dispatch(users.updatedstudentprofilelist(value));
        },
       
    };
}

class Dashboard_Company extends Component {

    constructor(props) {
    super(props);
        this.state = {
            open_modal: false,
            // modal data
                CompanyName: '',
                Companyemail: '',
                contact: '',
                job_specification: '',
                job_description: '',
                age_limit : '',
                No_of_employes_required: '',
                When_required: '',
                imageURL: this.props.currentUser.Loged_in_user.imageURL,
                userUID: this.props.currentUser.Loged_in_user.userUID,
                userType: this.props.currentUser.Loged_in_user.userType,
                // modal data
            
        }
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
            var company_profile_data = {
                CompanyName: this.state.CompanyName,
                Companyemail: this.state.Companyemail,
                contact: this.state.contact,
                job_specification: this.state.job_specification,
                job_description: this.state.job_description,
                age_limit : this.state.age_limit,
                No_of_employes_required: this.state.No_of_employes_required,
                When_required: this.state.When_required,
                imageURL: this.props.currentUser.Loged_in_user.imageURL,
                userUID: this.props.currentUser.Loged_in_user.userUID,
                userType: this.props.currentUser.Loged_in_user.userType,
            }
            console.log(company_profile_data)
            // sending data to firebase
            var database = firebase.database();
            database.ref('/company_profile/').push(company_profile_data);

         };

         CompanyName_handler = (ev) => {
            
            this.setState({CompanyName: ev.target.value})
         }
         
         Companyemail_handler = (ev) => {
            this.setState({Companyemail: ev.target.value})
         }
         
         contact_handler = (ev) => {
            this.setState({contact: ev.target.value})
         }

         job_specification_handler  = (ev) => {
            this.setState({job_specification: ev.target.value})
         }
         
         job_description_handler = (ev) => {
            this.setState({job_description: ev.target.value})
         }
         
         age_limit_handler = (ev) => {
            this.setState({age_limit: ev.target.value})
         }
         
         No_of_employes_required_handler = (ev) => {
            this.setState({No_of_employes_required: ev.target.value})
         }

         When_required = (ev) => {
            this.setState({When_required: ev.target.value})
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

      componentWillMount() {
             var that= this;     
             // getting data from firebase
             var ref = firebase.database().ref("//students_profile//");

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
            that.props.updated_studentsprofile_list(dataArray);
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
                <div>
              <Nav_Bar logginguser={this.Logging_user_in} updateduser={this.props.currentUser} changing_fb_btn_view={this.props.changing_fb_btn} />
              {/* <Users_list updateduserlist={this.updateduserlistt} passing_userlist={this.props.updated_user_list} currentUser_info={this.props.currentUser} /> */}
            </div>
            <div>
        <RaisedButton label="Create your company profile" onClick={this.handleOpen} />
        <Dialog
          title="Your Company Profile"
          actions={actions}
          modal={true}
          open={this.state.open_modal}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          {/* form */}

            Company Name: <TextField
            hintText="CompanyName"
            floatingLabelText="CompanyName"
            value={this.state.CompanyName}
            onChange={this.CompanyName_handler}
            /><br />
            Company email: <TextField
            hintText="Companyemail"
            floatingLabelText="Companyemail"
            value={this.state.Companyemail}
            onChange={this.Companyemail_handler}
            /><br />
            contact: <TextField
            hintText="contact"
            floatingLabelText="contact"
            value={this.state.contact}
            onChange={this.contact_handler}
            
            /><br />
            Job specification: <TextField
            hintText="job_specification"
            floatingLabelText="job_specification"
            value={this.state.job_specification}
            onChange={this.job_specification_handler}
            /><br />
            job Description: <TextField
            hintText="job_description"
            floatingLabelText="job_description"
            value={this.state.job_description}
            onChange={this.job_description_handler}
            
            /><br />
            Age limit: <TextField
            hintText="age_limit"
            floatingLabelText="20 - 40"
            value={this.state.age_limit}
            onChange={this.age_limit_handler}
            /><br />
            No of employes required: <TextField
            hintText="No_of_employes_required"
            floatingLabelText="No_of_employes_required"
            value={this.state.No_of_employes_required}
            onChange={this.No_of_employes_required_handler}
           
            /><br />
            When required: <TextField
            hintText="date"
            floatingLabelText="date"
            value={this.state.When_required}
            onChange={this.When_required}
            type='date'
            
            /><br />
        </Dialog>

        <div>
      <Subheader>Employees avaliable</Subheader>
            {/* company jobs list */}
        {console.log(this.props.updated_students_profile_list)}

            
{
    this.props.updated_students_profile_list.map(
        (value, index) => {
            return(
                // console.log(value)
                <Card style={{backgroundColor: '#e0e8ff', marginTop: '50px'}}>
                <CardHeader
                  title={value.name}
                  subtitle={value.email}
                  avatar={value.imageURL}
                />
                <CardTitle title={value.qualification} subtitle={`skill: ${value.specialskills}`} />
                <CardText>
                {value.why_we_choose_you}
                </CardText>
                <CardActions style={{fontWeight : '200'}}>
                  <h5>Age: {value.age}</h5>
                  <h5>last year grades: {value.last_year_grades}</h5>
                  <h5>Contact: {value.contact}</h5>
                </CardActions>
              </Card>
            
            )
        }
    )
}


      </div>

      </div>
      </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard_Company);