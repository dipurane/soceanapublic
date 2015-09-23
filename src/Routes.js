/**
 * Created by nikhila on 9/3/2015.
 */
let React = require('react');
let { Route,
    DefaultRoute,
    NotFoundRoute,
    Redirect} = require('react-router');

let Home = require('./js/component/app/Home');
let About = require('./js/component/app/About');
let Vision = require('./js/component/app/Vision');
let Media = require('./js/component/app/Media');
let Team = require('./js/component/app/Team');
let Contact = require('./js/component/app/Contact');
let Login = require('./js/component/app/Login');
let SignUp = require('./js/component/app/volunteers/SignUp');
let HomePage = require('./js/component/app/HomePage');

let VolunteerHomePage = require('./js/component/app/volunteers/HomePage');

var Routes = (
    <Route path="/" handler={Home}>
        <Route name="about" handler={About}/>
        <Route name="vision" handler={Vision}/>
        <Route name="media" handler={Media}/>
        <Route name="team" handler={Team}/>
        <Route name="contact" handler={Contact}/>
        <Route name="login" handler={Login}/>

        <Redirect from="volunteers" to="volunteers/signup"/>

        <Route name="volunteers">
            <Route name="signup" handler={SignUp}/>
            <Route name="home" handler={VolunteerHomePage}/>
        </Route>

        <DefaultRoute handler={HomePage}/>
    </Route> );

export default Routes;