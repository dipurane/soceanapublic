/**
 * Created by nikhila on 9/14/2015.
 */
let React = require('react');
let Image = require('./Image');

class ImageLinks extends React.Component {
    constructor(props) {
        super();
        this.state = {
            images: props.images,
            style: props.style,
            className: props.className
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            images: nextProps.images,
            style: nextProps.style,
            className: nextProps.className
        });
    }
    render() {
        let links = this.state.images.map( (link, i) => {
            return (
                <Image {...this.props}
                    src={link.src}
                    name={link.name}
                    key={i} />
            );
        });

        return (
            <span>
                {links}
            </span>
        );
    }
}

ImageLinks.propTypes = {
    images: React.PropTypes.array.isRequired,
    style: React.PropTypes.object,
    className: React.PropTypes.string
};

export default ImageLinks;