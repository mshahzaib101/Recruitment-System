import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import Nav_Bar from '../components/navbar';
import users from '../store/actions/users';
import Users_list from '../components/users_list';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as firebase from 'firebase';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import {Tabs, Tab} from 'material-ui/Tabs';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        currentUser : state.Loged_in_user,
        updated_user_list : state.Updating_chat_list,
        updated_students_profile_list : state.Updating_list_of_profilies.students_profilies,
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
        updated_studentsprofile_list: (value) => {
            return dispatch(users.updatedstudentprofilelist(value));
        },
        updated_companyprofile_list: (value) => {
            return dispatch(users.updatedcompanyprofilelist(value));
        },
       
    };
}

class Dashboard_admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
            shoow: 'visible',
        };
        
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

    componentDidMount() {
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

     Logging_user_in = (value) => {
        this.props.logging_user(value);
      }
    
      changing_fb_btn = (value) => {
        this.props.changing_fb_btn(value);
      }

      updateduserlistt = (value) => {
        this.props.updateduserchatlist(value);
      }

      handleChange = (value) => {
            this.setState({
            value: value,
            });
        };

        delete_companey_profile = (value,index) => {
            var that= this;     
            console.log(value)
            // this.setState({shoow: 'hidden'})
        //      // getting data from firebase
        //      var ref = firebase.database().ref("/company_profile/");

        //       ref.on("value", (snapshot) => {
        // //     // console.log(snapshot.val())
        //      var key = snapshot.key; // "ada"
        //      var data = snapshot.val()
        // //     // console.log(data)
        // //     //passing an array
        // var deletedobj = []
        //   for(var key in data) {
            
        // //      console.log(data[key])
        //    if(data[key].userUID === a){
              
        //        deletedobj.push(a)
        //        console.log(deletedobj)
        //     //    firebase.database().ref("/company_profile/").set();
        //    }
        //    firebase.database().ref("/company_profile/").set();

        //     }
            
            
        //   });
         }
   
    render() {
       
        return(
            <div>
              <Nav_Bar logginguser={this.Logging_user_in} updateduser={this.props.currentUser} changing_fb_btn_view={this.props.changing_fb_btn} />
                <div>
                <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Jobs Requests" value="a">
          <div>
          <Subheader>Employees avaliable</Subheader>
            {/* company jobs list */}
        {console.log(this.props.updated_students_profile_list)}

            
{
    this.props.updated_students_profile_list.map(
        (value, index) => {
            return(
                // console.log(value)
            <Card style={{backgroundColor: '#e0e8ff', marginTop: '50px' ,visibility: this.state.shoow}} key={index} >
                <CardHeader
                  title={value.name}
                  subtitle={value.email}
                  avatar={value.imageURL}
                />
                <CardTitle title={value.qualification} subtitle={`skill: ${value.specialskills}`} />
                <div onClick={() => this.delete_companey_profile(value)} style={{float: 'right', fontSize : '30px', marginRight: '20px'}}>X</div>
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

          
        </Tab>
        <Tab label="Vaccanies" value="b">
          <div>
          <div>
      <Subheader>Vaccants avaliable</Subheader>
            {/* company jobs list */}
        {console.log(this.props.updated_company_profile_list)}

            
{
    this.props.updated_company_profile_list.map(
        (value, index) => {
            return(
                // console.log(value)
                <Card style={{backgroundColor: '#e0e8ff', marginTop: '50px', visibility: this.state.shoow}} key={index}>
                <CardHeader
                  title={value.CompanyName}
                  subtitle={value.Companyemail}
                  avatar={value.imageURL}
                />
                <CardTitle title={value.job_specification} subtitle={`${value.No_of_employes_required} posts avaliable`} />
                <div onClick={() => this.delete_companey_profile(value, index)} style={{float: 'right', fontSize : '30px', marginRight: '20px'}}>X</div>

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
        </Tab>
      </Tabs>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard_admin)