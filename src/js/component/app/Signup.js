/**
 * Created by nikhila on 9/3/2015.
 */
import React from 'react';
let AppStores = require('../../stores/AppStores');

class SignUp extends React.Component {
    render() {
        let userType = AppStores.getUserType();

        return (
            <h2>
                {userType} signup page
            </h2>
        );
    }
}

export default SignUp;