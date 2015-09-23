/**
 * Created by nikhila on 9/3/2015.
 */
import React from 'react';
let Signup = require('../Signup');
let VolunteersActions = require('../../../actions/VolunteersActions');

class SignUp extends React.Component {
    constructor() {
        super();
        VolunteersActions.setType('volunteers');
    }
    render() {
        return (
            <Signup></Signup>
        );
    }
}

export default SignUp;