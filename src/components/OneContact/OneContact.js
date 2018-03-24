import React, {Component} from 'react';
import './OneContact.css';



class OneContact extends Component {

    render() {
        return (
            <div className="OneContact" onClick={this.props.show}>
                <h2>{this.props.name}</h2>
                <img src={this.props.photo} alt=""/>
            </div>
        )
    }
}


export default OneContact;