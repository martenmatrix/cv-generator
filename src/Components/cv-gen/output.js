import React, { Component } from 'react';

function Header(props) {
    return (
        <div className="header">
          <div className="name">{props.name}</div>
          <div className="contact">
            <div className="email">{props.email}</div>
            <div className="phone">{props.phone}</div>
          </div>
        </div>
    );
}

function Address(props) {
    return (
        <div className="address">
          <div className="streetNumber">{`${props.street} ${props.number}`}</div>
          <div className="zipCountry">{`${props.zip} ${props.city}`}</div>
          <div className="state">{props.state}</div>
          <div className="country">{props.country}</div>
        </div>
    );
}

class GeneralOutput extends Component {
    render() {
      const { firstName,
              lastName,
              email,
              phone,
              
              street,
              number,
              city,
              state,
              zip,
              country } = this.props.data;

      return (
        <div className="general">
            <h2>General</h2>
            <Header name={`${firstName} ${lastName}`}
                    email={email}
                    phone={phone}/>

            <Address street={street}
                     number={number}
                     city={city}
                     state={state}
                     zip={zip}
                     country={country}/>
        </div>
      );
    }
}

function Education(props) {
    const data = props.data;
    const {
        school,
        education,
        dateStart,
        dateEnd, } = data;

    return (
        <div className="education-section">
          <div className="education">{education}</div>
          <div className="school">{school}</div>
          <div className="date">{`${dateStart} - ${dateEnd}`}</div>
        </div>
    );
}


class EducationOutput extends Component {
    render() {
      return (
        <div className="education">
  
        </div>
      );
    }
}
  
class ExperienceOutput extends Component {
    render() {
      return (
        <div className="experience">
  
        </div>
      );
    }
}
  
class CVGeneratorOutput extends Component {
    render() {
      const data = this.props.data;

      return (
        <div className="cv-generator-output">
            <GeneralOutput data={data}/>
            <EducationOutput />
            <ExperienceOutput />
        </div>
      );
    }
}

export default CVGeneratorOutput;