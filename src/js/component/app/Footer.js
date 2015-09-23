/**
 * Created by nikhila on 9/11/2015.
 */
let React = require('react');
let { Row, Col, Grid } = require('react-bootstrap');

let WeeklyUpdates = require('./WeeklyUpdates');
let TextLinks = require('../core/TextLinks');

let footerContent = {
    menu1: {
        header: 'Who We Are',
        links: [
            {
                href: '#',
                displayText: 'About soceana'
            },
            {
                href: '#',
                displayText: 'About philas'
            },
            {
                href: '#',
                displayText: 'Mission & vision'
            },
            {
                href: '#',
                displayText: 'Our team'
            },
            {
                href: '#',
                displayText: 'Contact us'
            },
            {
                href: '#',
                displayText: 'Blog'
            },
            {
                href: '#',
                displayText: 'Terms & services'
            },
            {
                href: '#',
                displayText: 'Privacy policy'
            }
        ]
    },
    menu2: {
        header: 'What We Do',
        links: [
            {
                href: '#',
                displayText: 'For volunteers'
            },
            {
                href: '#',
                displayText: 'For nonprofits'
            },
            {
                href: '#',
                displayText: 'For corporate donors'
            },
            {
                href: '#',
                displayText: 'For philanthropists'
            },
            {
                href: '#',
                displayText: 'Data analytics'
            }
        ]
    },
    menu3: {
        header: 'Get Involved',
        links: [
            {
                href: '#',
                displayText: 'Join us'
            },
            {
                href: '#',
                displayText: 'Causes'
            },
            {
                href: '#',
                displayText: 'Events'
            },
            {
                href: '#',
                displayText: 'Careers'
            },
            {
                href: '#',
                displayText: 'FAQ'
            },
            {
                href: '#',
                displayText: 'FORUM'
            }
        ]
    }
};

class Footer extends React.Component {
    render() {
        return (
            <Row className='footer'>
                <Col xs={12} sm={7}>
                    <Row>
                        <Col xsOffset={2} xs={4} smOffset={2} sm={3} className='marginBottom15'>
                            <TextLinks content={footerContent.menu1}
                                       headerClass='footerHeading'
                                       linkClass='footerLink'/>
                        </Col>

                        <Col xsOffset={1} xs={4} smOffset={0} sm={3} className='marginBottom15'>
                            <TextLinks content={footerContent.menu2}
                                       headerClass='footerHeading'
                                       linkClass='footerLink'/>
                        </Col>

                        <Col xsOffset={1} xs={4} smOffset={0} sm={3} className='marginBottom15'>
                            <TextLinks content={footerContent.menu3}
                                       headerClass='footerHeading'
                                       linkClass='footerLink'/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={5}>
                    <Row>
                        <Col xsOffset={1} xs={10} smOffset={0} sm={9}>
                            <WeeklyUpdates />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Footer;