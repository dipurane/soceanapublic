/**
 * Created by nikhila on 9/14/2015.
 */
let React = require('react');
let {Input, Button, Row} = require('react-bootstrap');
let ImageLinks = require('../core/ImageLinks');

class WeeklyUpdates extends React.Component {
    render() {
        const subscribeButton = (
            <Button bsStyle="info">SUBSCRIBE</Button>
        );
        let styles = this.constructor.styles;

        let images = [
            {
                name: 'facebook',
                src: 'https://daks2k3a4ib2z.cloudfront.net/55dc26b8b7c4dc37285738fc/55dc719c2f6866e27c610723_fb.png'
            },
            {
                name: 'twitter',
                src: 'https://daks2k3a4ib2z.cloudfront.net/55dc26b8b7c4dc37285738fc/55dc722cb7c4dc37285744d3_tw.png'
            },
            {
                name: 'googleplus',
                src: 'https://daks2k3a4ib2z.cloudfront.net/55dc26b8b7c4dc37285738fc/55dc72338f79b836280d3b4c_google.png'
            },
            {
                name: 'youtube',
                src: 'https://daks2k3a4ib2z.cloudfront.net/55dc26b8b7c4dc37285738fc/55dc723b2f6866e27c610738_you.png'
            },
            {
                name: 'linkedin',
                src: 'https://daks2k3a4ib2z.cloudfront.net/55dc26b8b7c4dc37285738fc/55dc72598f79b836280d3b52_in.png'
            }
        ];

        return (
            <Row className='weeklyUpdate'>
                <section className='txt'>
                    Receive weekly updates on the causes you care about.
                </section>
                <Input type="text" buttonAfter={subscribeButton} />
                <ImageLinks images={images} className='footerSocialImages'/>
            </Row>
        );
    }
}

export default WeeklyUpdates;