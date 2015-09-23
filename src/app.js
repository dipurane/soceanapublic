/**
 * Created by nikhila on 9/3/2015.
 */
let React = require('react');
let Router = require('react-router');
let Routes = require('./Routes');
let AppStores = require('./js/stores/AppStores');

Router.run(Routes, Router.HashLocation, Handler => React.render(<Handler />, document.body));