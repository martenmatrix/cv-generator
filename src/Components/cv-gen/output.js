import React, { Component } from 'react';
import '../styles/cv-gen.css';

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
    const {
        school,
        education,
        dateStart,
        dateEnd, } = props.education;

    return (
        <div className="education-section">
          <div className="education">{education}</div>
          <div className="school">{school}</div>
          <div className="date">{dateStart
                                + ((dateStart&&dateEnd) ? '-' : '')
                                + dateEnd}</div>
        </div>
    );
}


function Experience(props) {

  const { company,
          position,
          dateStart,
          dateEnd,
          description } = props.experience;

  return (
    <div className="experience-section">
      <div className="company">{company}</div>
      <div className="position">{position}</div>
      <div className="date">{dateStart
                            + ((dateStart&&dateEnd) ? '-' : '')
                            + dateEnd}</div>
      <div className="description">{description}</div>
    </div>
  );
}

  
class CVGeneratorOutput extends Component {
    render() {
      const data = this.props.data;
      const educationArray = data.education;
      const experienceArray = data.experience;

      return (
        <div className="cv-generator-output">
            <h2>General</h2>
            <GeneralOutput data={data}/>

            <h2>Education</h2>
            <div className="education">
            {educationArray.map((education, index) => (
                            <Education key={index} education={education}/>
                            ))}
            </div>
            
            <h2>Experience</h2>
            {experienceArray.map((experience, index) => (
                            <Experience key={index} experience={experience}/>
                            ))}
        </div>
      );
    }
}

export default CVGeneratorOutput;