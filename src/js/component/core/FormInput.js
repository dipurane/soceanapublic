/**
 * Created by ashutoshj on 9/10/2015.
 */

let React = require('react/addons');
let Bootstrap = require('react-bootstrap');
let assign = require('object-assign');

var errMsg = {
    required: 'This field cannot be empty.',
    email: 'Invalid email'
};

class FormInput extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false,
            errorMessage: '',
            val: ''
        };
        const defaultVal = {
            isRequired: false,
            numbersOnly: false,
            type: 'text',
            addonBefore: null
        };
        this.props = assign({}, defaultVal, this.props);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        if( this.props.maxLength ) {
            this.props.maxLength = parseInt(this.props.maxLength);
        } else {
            this.props.maxLength = -1;
        }
    }
    _getInput() {
        return React.findDOMNode(this.refs.input);
    }
    _getForm() {
        return React.findDOMNode(this.refs.form);
    }
    _checkRequired(value) {
        return ( value.trim() !== '' );
    }
    _checkEmail(value){
        /* Email type format true=john@sam.com False=as.com as@com */
        var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        return (pattern.test(value));
    }
    _isNumber(charCode) {
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    }
    _addEvents() {
        let ip = this._getInput();
        ip.addEventListener('blur', this.handleBlur);
        ip.addEventListener('focus', this.handleFocus);
        if( this.props.numbersOnly ) {
            ip.addEventListener('keypress', this.validateForNumber.bind(this));
        }
    }
    _removeEvents() {
        let ip = this._getInput();
        ip.removeEventListener('blur', this.handleBlur);
        ip.removeEventListener('focus', this.handleFocus);
        if( this.props.numbersOnly ) {
            ip.addEventListener('keypress', this.validateForNumber.bind(this));
        }
    }
    _formHasError(type) {
        this._getForm().classList.add('has-error');
        this.setState({
            error: true,
            errorMessage: errMsg[type]
        });
    }
    componentDidMount() {
        /* Adding Dynamic Event's */
        this._addEvents();
        let input = this._getInput();

        /* Adding Dynamic Attributes */
        if( this.props.placeholder ) {
            input.setAttribute("placeholder",this.props.placeholder);
        }
        if(this.props.maxLength) {
            input.setAttribute("maxLength", this.props.maxLength);
        }
        if(this.props.type) {
            input.setAttribute("type",this.props.type);
        }

        if(this.props.addBefore) {
            /*let inputContainer = React.findDOMNode(this.refs.inputContainer);
            let icon = (<span className="input-group-addon" >{this.props.addBefore}</span>);
            inputContainer.insertBefore(icon, this._getInput());*/
        }

        if(this.props.addAfter) {
            /*let inputContainer = React.findDOMNode(this.refs.inputContainer);
            let icon = (<span className="input-group-addon" >{this.props.addAfter}</span>);
            inputContainer.insertAfter(icon, this._getInput());*/
        }

    }
    validateForNumber(evt) {
        evt.preventDefault();
        let preVal = this.state.val;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if( this._isNumber(charCode) ) {
            let value = this._getInput().value;
            let currLength = value.length + 1;
            let maxLength = this.props.maxLength;
            if( maxLength != -1 && currLength <= maxLength ) {
                this.setState({
                    val: this._getInput().value + String.fromCharCode(charCode)
                });
            }
        } else {
            this.setState({
                val: preVal
            });
        }
    }
    componentWillUnmount() {
        this._removeEvents();
    }
    validate() {
        let value = this._getInput().value;
        if( this.props.isRequired ) {
            if(!this._checkRequired(value)) {
                this._formHasError('required');
                return;
            }
        }
        if( this.props.type == 'email' ) {
            if(!this._checkEmail(value)) {
                this._formHasError('email');
                return;
            }
        }
    }
    resetComponent() {
        if( this.state.error ) {
            this._getForm().classList.remove('has-error');
            this.setState({
                error: false,
                errorMessage: ''
            });
        }
    }
    handleFocus() {
        this.resetComponent();
    }
    handleBlur() {
        this.validate();
    }
    render() {
        return (
            <div ref='form' className='form-group'>
                <div ref='inputContainer' className='input-group'>

                    <input className='form-control'
                           ref='input'
                           valueLink={this.linkState('val')}
                        />
                </div>
                <span ref='errorMessage' className='text-danger'>
                    <small>{this.state.errorMessage}</small>
                </span>
            </div>
        );
    }
}
FormInput.propTypes = {
    isRequired: React.PropTypes.bool,
    type: React.PropTypes.oneOf(['text', 'email', 'password', 'number']),
    numbersOnly: React.PropTypes.bool,
    addBefore: React.PropTypes.element
};

assign(FormInput.prototype, React.addons.LinkedStateMixin);

export default FormInput;
