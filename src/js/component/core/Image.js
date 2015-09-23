/**
 * Created by nikhila on 9/14/2015.
 */
let React = require('react');

class Image extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false
        };
        this.onImageLoad = this.onImageLoad.bind(this);
    }
    onImageLoad() {
        this.setState({loaded: true});
        let image = React.findDOMNode(this.refs.image);
        image.setAttribute('src', this.props.src);
        image.classList.remove('loader');
    }
    componentDidMount() {
        let image = new window.Image();
        image.onload = this.onImageLoad;
        image.src = this.props.src;
    }
    render() {
        return (
            <img ref='image'
                 style={this.props.style ? this.props.style : null}
                 className={'loader ' + (this.props.className ? this.props.className : null)}
                 />
        );
    }
}

export default Image;