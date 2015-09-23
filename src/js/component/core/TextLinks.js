/**
 * Created by nikhila on 9/11/2015.
 */
let React = require('react');
let {Row} = require('react-bootstrap');

class TextLinks extends React.Component {
    constructor(props) {
        super();
        this.state = {
            content: props.content,
            headerClass: props.headerClass,
            linkClass: props.linkClass

        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            content: nextProps.content,
            headerClass: nextProps.headerClass,
            linkClass: nextProps.linkClass
        });
    }

    render() {
        let links = this.state.content.links.map( (link, i) => {
            return (
                <li key={i} className={this.state.linkClass}>
                    <a href={link.href}>{link.displayText}</a>
                </li>
            );
        });

        return (
            <Row>
                <h4 className={this.state.headerClass}>{this.props.content.header}</h4>
                <ul className='noListStyle'>
                    {links}
                </ul>
            </Row>
        );
    }
}

TextLinks.propTypes = {
    content: React.PropTypes.object.isRequired,
    headerClass: React.PropTypes.string,
    linkClass: React.PropTypes.string
};

export default TextLinks;