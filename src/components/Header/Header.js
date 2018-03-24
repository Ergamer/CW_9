import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <div className="Header-Links">
                    <NavLink to="/pages/contacts">Contacts</NavLink>
                    <NavLink to="/pages/creator" exact>Add new contact</NavLink>
                </div>
            </div>
        )
    }
}



export default Header;