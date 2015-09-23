/**
 * Created by nikhila on 9/23/2015.
 */
let React = require('react');
let {Grid, Row, Col, Tabs, Tab} = require('react-bootstrap');
let Thumbnail = require('../../core/Thumbnail');

class ManageProfile extends React.Component {
    render() {
        return (
            <section className='contentBody'>
                <Grid>
                    <Row>
                        <Col xs={6} md={2}>
                            <Thumbnail src="img/dummy.png" alt="242x200" href="updateProfile">
                                <h5>Update Profile</h5>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} mdOfsset={1} md={2}>
                            <Thumbnail src="img/dummy.png" alt="242x200" href="paymentInfo">
                                <h5>Payment Info</h5>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}

class ManageMyWork extends React.Component {
    render() {
        return (
            <section className='contentBody'>
                <br/>Tab 2 content
            </section>
        );
    }
}

class ManagePhilas extends React.Component {
    render() {
        return (
            <section className='contentBody'>
                <br/>Tab 3 content
            </section>
        );
    }
}

class Reports extends React.Component {
    render() {
        return (
            <section className='contentBody'>
                <br/>Tab 4 content
            </section>
        );
    }
}

class HomePage extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col smOffset={1} sm={10}>
                        <Tabs defaultActiveKey={1} tabWidth={10} bsStyle='pills'>
                            <Tab eventKey={1} title="Manage Profile"><ManageProfile /></Tab>
                            <Tab eventKey={2} title="Manage My Work"><ManageMyWork/></Tab>
                            <Tab eventKey={3} title="Manage Philas"><ManagePhilas /></Tab>
                            <Tab eventKey={4} title="Reports"><Reports /></Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default HomePage;