import React from 'react';
import {Route,Router, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'; //for changing routes with a function
import Home_page from './containers/home_page';
import Dashboard_admin from './containers/dashboard_admin';
import Dashboard_Company from './containers/dashboard_company';
import Dashboard_Student from './containers/dashboard_student'
import pass from './containers/pass'


import history from './history';


//for changing routes with a function
const CustomRoutes = () => {
    return(
        <Router history={history}>
            <div>
                <Route exact path='/' component={Home_page} />
                 <Route exact path='/dashboard_Admin' component={Dashboard_admin} />
                 <Route exact path='/dashboard_Company' component={Dashboard_Company} />
                 <Route exact path='/dashboard_Student' component={Dashboard_Student} />
                 <Route path='/password' component={pass} />
               

            </div>
        </Router>
    )
}

// HOW TO CHANGE NAVIGATION
// we us Link
// <Link to='/'>Home</Link>
// <Link to='home'>Home</Link>
// but import from 'react-router-dom';

// HOW TO CHANGE ROUTE WITH A Function
// onclick
// if user enters correct password and you want to change route than 
// in onclick function
// this.props.history.push('/');
// this.props.history.push('home');


// to check currently signed in user
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//     } else {
//       // No user is signed in.
//     }
//   });

export default CustomRoutes;