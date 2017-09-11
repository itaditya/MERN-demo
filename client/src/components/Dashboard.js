import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google"> Login With Google </a></li>
                );
            default:
                return (
                    <li><a href="/api/logout"> Log Out </a></li>
                );
        }
    }
    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo" href="/">Emaily</a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
};

const mapStateToProps = ({auth}) => {
    return { auth };
}
/*
Alternatively
const mapStateToProps = (state) => {
    return { auth: state.auth }
}*/

export default connect(mapStateToProps)(Header);
