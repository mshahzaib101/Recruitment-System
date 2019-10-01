import React, { Component } from 'react';
import history from '../history';


class pass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pass: '',
        }
    }
    
    handler = (ev) => {
        this.setState({pass: ev.target.value})
    }

    check = () => {
        if(this.state.pass ==='123') {
            history.push('/dashboard_Admin');
        }
        else{
            history.push('/');
        }
    }

    render() {
        return(
        <div>
            <input type='password' value={this.state.pass} onChange={this.handler} />
            <input type='submit' onClick={this.check} />
        </div>)
    }
}

export default pass;