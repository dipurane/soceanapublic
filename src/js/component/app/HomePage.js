/**
 * Created by nikhila on 9/11/2015.
 */
let React = require('react');
let path = require('path');
let SignUp = require('../core/SignUp');
let {Grid, Row, Col, Jumbotron} = require('react-bootstrap');
let navigate = require('../../navigation');
let routesMap = require('../../routesMap');

class HomePage extends React.Component {
    signUpHandler(type, evt) {
        evt.preventDefault();
        navigate.to(path.join(routesMap.get(type),'signup'));
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Jumbotron className='signUpJumbotron'>
                        <h1 className='text-center'>Are you interested to Join Us?</h1>
                    </Jumbotron>
                </Row>
                <Row>
                    <Col xs={12} sm={6} lg={3}>
                        <h1 className='boldExo signHeaderContent'>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</h1>
                        <SignUp header='CORPORATIONS'
                                content='Employee-led volunteering and track impact through data metrics'
                                click={this.signUpHandler.bind(this, 'cor')}/>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <h1 className='boldExo signHeaderContent'>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</h1>
                        <SignUp header='NON-PROFIT'
                                content='Find volunteers through personalized opportunities based on skills and interests'
                                click={this.signUpHandler.bind(this, 'non')}/>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <h1 className='boldExo signHeaderContent'>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</h1>
                        <SignUp header='VOLUNTEERS'
                                content='Matching opportunities to volunteer through engagement platform with personalized event planning'
                                click={this.signUpHandler.bind(this, 'vol')}/>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <h1 className='boldExo signHeaderContent'>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</h1>
                        <SignUp header='PHILATROPIST'
                                content='Employee-led volunteering and track impact through data metrics'
                                click={this.signUpHandler.bind(this, 'phil')}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HomePage;