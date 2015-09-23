/**
 * Created by nikhila on 9/3/2015.
 */

let React = require('react');
let {RouteHandler} = require('react-router');
let {Grid, Row, Col, Jumbotron, Glyphicon} = require('react-bootstrap');

let Menu = require('./Menu');
let HomePage = require('./HomePage');
let FormInput = require('../core/FormInput');
let Footer = require('./Footer');

class Home extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={12}>
                        <Menu logo='img/logo.png'/>
                        <FormInput type='email' isRequired={true} addBefore={<Glyphicon glyph="music" />} />
                        { /* <HomePage /> */ }
                        <RouteHandler />
                        <Footer />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;