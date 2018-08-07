import React, { Component } from 'react';
import './MainServices.css';

class MainServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: 'websites',
          name: 'Websites',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '+
            'Lorem Ipsum has been the industry\'s standard dummy text ever.',
        },
        {
          id: 'apps',
          name: 'Applications',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '+
            'Lorem Ipsum has been the industry\'s standard dummy text ever.',
        },
        {
          id: 'branding',
          name: 'Branding',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '+
            'Lorem Ipsum has been the industry\'s standard dummy text ever.',
        },
      ]
    };
  }

  render() {
    return (
      <div className="MainServices">
        {
          this.state.services.map((service, index) => {
            return (
              <div key={index} className="MainServices__item Animate-lines" data-id={service.id}>
                <div className="lines lines-tl">
                  <div className="line" />
                  <div className="line" />
                </div>
                <div className="lines lines-br">
                  <div className="line" />
                  <div className="line" />
                </div>
                <div className="MainServices__item__content">
                  <div className="MainServices__item__icon" />
                  <div className="MainServices__item__text">
                    <div className="MainServices__item__name">{service.name}</div>
                    <div className="MainServices__item__description">{service.description}</div>
                  </div>
                  {/* <div className="MainServices__item__button">Learn More &raquo;</div> */}
                </div>
              </div>
            )
          })
        }
        
      </div>
    );
  }

}

export default MainServices;
