import React, {Component} from 'react';
import './AllContacts.css';
import OneContact from '../components/OneContact/OneContact';
import axios from 'axios';
import {fetchContact, saveContactChanges} from "../store/actions";
import {connect} from "react-redux";
import Modal from "../components/UI/Modal/Modal";
import {NavLink} from "react-router-dom";


class AllContacts extends Component {


    state = {
        hiddenModal: false,
        contId: ''
    };


    showMeModal = () => {
        this.setState({hiddenModal: true});
    };

    closeModal = () => {
        this.setState({hiddenModal: false});
    };

    componentDidMount () {
        this.props.fetchContact();
    }

    render() {
        console.log(this.props.contacts)
        return (
            <div className="AllContacts">
                <Modal
                    show={this.state.hiddenModal}
                    closed={this.closeModal}
                >
                    <img src={this.props.match.params.id} alt=""/>
                    <h3>{this.props.contacts.name}</h3>
                    <p>{this.props.contacts.phone}</p>
                    <p>{this.props.contacts.email}</p>
                    <NavLink to={"/editor"}>Edit</NavLink>
                    <button>Delete</button>
                </Modal>
                {Object.keys(this.props.contacts).map((contact) => {
                    return (<OneContact
                        show={this.showMeModal}
                        photo={this.props.contacts[contact].contacts.photo}
                        name={this.props.contacts[contact].contacts.name}
                        id={contact.id}
                    />)
                })}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        saveContactChanges: (e, contacts) => dispatch(saveContactChanges(e, contacts)),
        fetchContact: () => dispatch(fetchContact())
    }
};


export default connect (mapStateToProps, mapDispatchToProps) (AllContacts);

