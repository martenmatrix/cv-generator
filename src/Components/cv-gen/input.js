import React, { Component } from 'react';

class GeneralInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onNewInput(event.target.name, event.target.value, 'general');
    }

    render() {
      return (
        <div className="general">
            <h2>General Info</h2>
            <div className="general-input">
                <input type="text" name="firstname" placeholder="First Name" />
                <input type="text" name="lastname" placeholder="Last Name" />
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="phone" placeholder="Phone" />
                <div className="address">
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="number" placeholder="Number" />
                    <input type="text" name="city" placeholder="City" />
                    <input type="text" name="state" placeholder="State" />
                    <input type="text" name="zip" placeholder="Zip" />
                    <input type="text" name="country" placeholder="Country" />
                </div>
            </div>
        </div>
      );
    }
  }
  
class EducationInput extends Component {
    render() {
      return (
        <div className="education">
            <h2>Education</h2>
            <div className="education-input">
                <input type="text" name="school" placeholder="School" />
                <input type="text" name="education" placeholder="Education" />
                <div className="date">
                    <input type="text" name="start" placeholder="Start" />
                    <input type="text" name="end" placeholder="End" />
                </div>
            </div>
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
      const { onNewInput } = this.props;

      return (
        <div className="cv-generator-input">
            <GeneralInput onNewInput={onNewInput}/>
            <EducationInput onNewInput={onNewInput}/>
            <ExperienceInput onNewInput={onNewInput}/>
        </div>
      );
    }
}

export default CVGeneratorInput;