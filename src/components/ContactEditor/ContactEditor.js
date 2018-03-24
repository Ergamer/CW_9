import React, {Component} from 'react';
import './ContactEditor.css';
import axios from 'axios';
import {connect} from "react-redux";
import {saveContactChanges} from "../../store/actions";


class ContactEditor extends Component {


    state = {
        name: '',
        phone: '',
        email: '',
        photo: ''
    };


    contactValueChanged = (event) => {
        event.persist();
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <form className="ContactCreator" action="">
                <div>Name<input
                    name="name"
                    value={this.state.name}
                    onChange={this.contactValueChanged}
                    type="text"/>
                </div>
                <div>Phone<input
                    value={this.state.phone}
                    onChange={this.contactValueChanged}
                    name="phone"
                    type="text"/>
                </div>
                <div>Email
                    <input
                        value={this.state.email}
                        onChange={this.contactValueChanged}
                        name="email"
                        type="text"/>
                </div>
                <div>Photo
                    <input
                        value={this.state.photo}
                        onChange={this.contactValueChanged}
                        name="photo"
                        type="text"/>
                </div>
                <button onClick={(e) => this.props.saveContactChanges(e, this.state)}>Save</button>
                <button>Back to contacts</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        saveContactChanges: (e, contacts) => dispatch(saveContactChanges(e, contacts))
    }
};


export default connect (mapStateToProps, mapDispatchToProps) (ContactEditor);

