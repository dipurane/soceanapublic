/**
 * Created by nikhila on 9/3/2015.
 */
import React from "react/addons";
import {Link} from "react-router";
window.$ = window.jQuery = window.jQuery || require('jquery');
require('bootstrap');

let {Row} = require('react-bootstrap');

class Menu extends React.Component {
    handleClick(e) {
        Object.keys(this.refs).forEach(key => {
            React.findDOMNode(this.refs[key]).parentNode.classList.remove('active');
        });

        e.target.parentNode.classList.add('active');
    }
    render() {
        let brandImg = (<img className='logo' src={this.props.logo} alt="" />);

        return (
            <Row>
                <nav className="navbar navbar-default">
                    <div className="container-fluid menu">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">{brandImg}</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active"><a href="#/about" ref='about' onClick={this.handleClick.bind(this)}>ABOUT</a></li>
                                <li><a href="#/vision" ref='vision' onClick={this.handleClick.bind(this)}>VISION</a></li>
                                <li><a href="#/media" ref='media' onClick={this.handleClick.bind(this)}>MEDIA</a></li>
                                <li><a href="#/team" ref='team' onClick={this.handleClick.bind(this)}>TEAM</a></li>
                                <li><a href="#/contact" ref='contact' onClick={this.handleClick.bind(this)}>CONTACT</a></li>
                                <li><a href="#/login" ref='login' onClick={this.handleClick.bind(this)}>Log In</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Row>
        );
    }
}

export default Menu;