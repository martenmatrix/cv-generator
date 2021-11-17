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
    const currentGeneral = this.props.currentGeneral;

    const { firstName,
            lastName,
            email,
            phone,
            street,
            number,
            city,
            state,
            zip,
            country } = currentGeneral;
    

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
        this.state = {
            school: '',
            education: '',
            dateStart: '',
            dateEnd: '',
        };
        
        this.setState(
            {
                id: this.props.id,
            }
        )

        this.add = this.add.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
      return (
        <div className="education">
            <div className="education-input">
                <input type="text" value={this.state.school} onChange={this.handleChange} name="school" placeholder="School" />
                <input type="text" value={this.state.education} onChange={this.handleChange} name="education" placeholder="Education" />
                <div className="date">
                    <input type="text" value={this.state.dateStart} onChange={this.handleChange} name="dateStart" placeholder="Start" />
                    <input type="text" value={this.state.dateEnd} onChange={this.handleChange} name="dateEnd" placeholder="End" />
                </div>
            </div>
            <button>Delete</button>
        </div>
      );
    }
}
  
class ExperienceInput extends Component {
    render() {
      return (
        <div className="experience">
            <h2>Experience</h2>
            <div className="experience-input">
                <input type="text" name="company" placeholder="Company" />
                <input type="text" name="position" placeholder="Position" />
                <div className="date">
                    <input type="text" name="start" placeholder="Start" />
                    <input type="text" name="end" placeholder="End" />
                </div>
                <textarea name="description" placeholder="Description" />
            </div>
        </div>
      );
    }
}
  
class CVGeneratorInput extends Component {   
    render() {
      const { currentGeneral,
              setGeneral,
              addEducation,
              removeEducation,
              educationArray } = this.props;

      return (
        <div className="cv-generator-input">
            <h2>General Info</h2>
            <GeneralInput currentGeneral={currentGeneral}
                          setGeneral={setGeneral}/>

            <h2>Education</h2>
            {educationArray.map((education, index) => <EducationInput key={index}
                                                                      id={education.id}
                                                                      removeEducation={removeEducation}/>)}
            
            <button onClick={addEducation}>Add</button>

            <ExperienceInput/>
        </div>
      );
    }
}

export default CVGeneratorInput;