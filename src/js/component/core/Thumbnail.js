/**
 * Created by nikhila on 9/23/2015.
 */
let React = require('react');

class Thumbnail extends React.Component {
    render() {
        return (
            <a href={this.props.href} className='thumbnail thumb'>
                <img src={this.props.src} alt={this.props.alt} />
                {this.props.children}
            </a>
        );
    }
}

export default Thumbnail;