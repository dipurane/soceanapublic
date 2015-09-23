/**
 * Created by nikhila on 9/3/2015.
 */
import React from "react/addons";
import Router from "react-router";
//import Bootstrap from "react-bootstrap";
var Bootstrap = require('react-bootstrap');

let {Grid, Row, Col, Thumbnail, Jumbotron} = Bootstrap;

class Info extends React.Component {
    render() {
        return (
            <Jumbotron>
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={2} >
                            <img src='http://localhost:3003/img/dummy_image.png' className="img-responsive center-block" alt='242x200'/>
                        </Col>
                        <Col xs={12} sm={10}>
                            <h1>Volunteer</h1>
                            <hr/>
                            <Col xs={12} sm={5}>
                                Lorem ipsum
                            </Col>
                            <Col xs={12} sm={5}>
                                Main cause of interest.
                            </Col>
                            <Col xs={12} sm={2}>
                                Total Hours
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </Jumbotron>
        );
    }
}

export default Info;