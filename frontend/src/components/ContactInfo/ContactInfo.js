import React, { Component } from 'react';
import './ContactInfo.css';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      methods: [
        {
          id: 'call',
          name: 'For Setting Appointments',
          description: '1.888.477.7932',
        },
        {
          id: 'email',
          name: 'For All Enquiries',
          description: 'email@willsquad.com',
        },
      ]
    };
  }

  render() {
    return (
      <div className="ContactInfo">
        {
          this.state.methods.map((contactMethod, index) => {
            return (
              <div className="ContactInfo__item" data-id={contactMethod.id}>
                <div className="Animate-lines">
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                </div>
                <a href="#">
                  <div className="ContactInfo__item__content">
                    <div className="ContactInfo__item__icon" />
                    <div className="ContactInfo__item__text">
                      <div className="ContactInfo__item__name">{contactMethod.name}</div>
                      <div className="ContactInfo__item__description">
                        {contactMethod.description}
                        <div className="line" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })
        }
      </div>
    );
  }

}

export default ContactInfo;
