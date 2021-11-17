import React, { Component } from 'react';

class GeneralInput extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.props.setGeneral(name, value);
    }

    render() {
    const currentState = this.props.currentState;

    const { firstName,
            lastName,
            email,
            phone,
            street,
            number,
            city,
            state,
            zip,
            country } = currentState;
    

    return (
        <div className="general">
            <div className="general-input">
                <input type="text" onChange={this.handleChange} value={firstName} name="firstName" placeholder="First Name" />
                <input type="text" onChange={this.handleChange} value={lastName} name="lastName" placeholder="Last Name" />
                <input type="text" onChange={this.handleChange} value={email} name="email" placeholder="Email" />
                <input type="text" onChange={this.handleChange} value={phone} name="phone" placeholder="Phone" />
                <div className="address">
                    <input type="text" onChange={this.handleChange} value={street} name="street" placeholder="Street" />
                    <input type="text" onChange={this.handleChange} value={number} name="number" placeholder="Number" />
                    <input type="text" onChange={this.handleChange} value={city} name="city" placeholder="City" />
                    <input type="text" onChange={this.handleChange} value={state} name="state" placeholder="State" />
                    <input type="text" onChange={this.handleChange} value={zip} name="zip" placeholder="Zip" />
                    <input type="text" onChange={this.handleChange} value={country} name="country" placeholder="Country" />
                </div>
            </div>
        </div>
      );
    }
  }
  
class EducationInput extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.props.setEducationValue(this.props.data.id, name, value);
    }

    render() {
    const {
        id,
        school,
        education,
        dateStart,
        dateEnd } = this.props.data;
    
    const removeEducation = this.props.removeEducation;

      return (
        <div className="education">
            <div className="education-input">
                <input type="text" value={school} onChange={this.handleChange} name="school" placeholder="School" />
                <input type="text" value={education} onChange={this.handleChange} name="education" placeholder="Education" />
                <div className="date">
                    <input type="text" value={dateStart} onChange={this.handleChange} name="dateStart" placeholder="Start" />
                    <input type="text" value={dateEnd} onChange={this.handleChange} name="dateEnd" placeholder="End" />
                </div>
            </div>
            <button onClick={() => removeEducation(id)}>Delete</button>
        </div>
      );
    }
}
  
class ExperienceInput extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.props.setExperienceValue(this.props.data.id, name, value);
    }

    render() {
      const { id,
            company,
            position,
            dateStart,
            dateEnd,
            description
            } = this.props.data;
      
      const removeExperience = this.props.removeExperience;

      return (
        <div className="experience">
            <div className="experience-input">
                <input type="text" onChange={this.handleChange} value={company} name="company" placeholder="Company" />
                <input type="text" onChange={this.handleChange} value={position} name="position" placeholder="Position" />
                <div className="date">
                    <input type="text" onChange={this.handleChange} value={dateStart} name="dateStart" placeholder="Start" />
                    <input type="text" onChange={this.handleChange} value={dateEnd} name="dateEnd" placeholder="End" />
                </div>
                <textarea name="description" onChange={this.handleChange} value={description} placeholder="Description" />
            </div>
            <button onClick={() => removeExperience(id)}>Delete</button>
        </div>
      );
    }
}
  
class CVGeneratorInput extends Component {   
    render() {
      const { currentState,
              setGeneral,
              setEducationValue,
              addEducation,
              removeEducation,

              addExperience,
              removeExperience,
              setExperienceValue,
             } = this.props;

      return (
        <div className="cv-generator-input">
            <h2>General Info</h2>
            <GeneralInput currentState={currentState}
                          setGeneral={setGeneral}/>

            <h2>Education</h2>
            {currentState.education.map((education, index) => <EducationInput key={index}
                                                                              data={education}
                                                                              removeEducation={removeEducation}
                                                                              setEducationValue={setEducationValue}/>)}
            
            <button onClick={addEducation}>Add</button>

            <h2>Experience</h2>
            {currentState.experience.map((experience, index) => <ExperienceInput key={index}
                                                                                 data={experience}
                                                                                 removeExperience={removeExperience}
                                                                                 setExperienceValue={setExperienceValue}/>)}
            <button onClick={addExperience}>Add</button>
        </div>
      );
    }
}

export default CVGeneratorInput;