/**
 * Created by nikhila on 9/10/2015.
 */
let React = require('react');
let assign = require('object-assign');
let { Button } = require('react-bootstrap');

class ActionButton extends React.Component {
    render() {
        return (
            <Button block
                    onClick={this.props.click}>Sign Up</Button>
        );
    }
}

class SignUp extends React.Component {
    constructor(props) {
        super();
        this.state = assign({}, props);
    }
    render() {
        let wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
        return (
            <section className='well' style={wellStyles}>
                <h1 className='boldExo signUpHeader'>{this.state.header}</h1>
                <h1 className='boldExo signUpTxt txtsignup'>{this.state.content}</h1>
                { this.state.click ? <ActionButton click={this.state.click} /> : null  }
            </section>
        );
    }
}

SignUp.propTypes = {
    header: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    click: React.PropTypes.func
};

export default SignUp;