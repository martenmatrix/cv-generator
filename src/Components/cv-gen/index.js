import React, { Component } from 'react';
import CVGeneratorInput from './input';
import CVGeneratorOutput from './output';

export default class CVGenerator extends Component {
    constructor() {
        super();
        // you should not use nested state in react because it re-renders everything when updating
        this.state = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                street: '',
                number: '',
                city: '',
                state: '',
                zip: '',
                country: '',

                lastIndex: 0,
                education: [],
                experience: [],
            }

        this.setGeneral = this.setGeneral.bind(this);

        this.addEducation = this.addEducation.bind(this);
        this.setEducationValue = this.setEducationValue.bind(this);
        this.removeEducation = this.removeEducation.bind(this);

        this.addExperience = this.addExperience.bind(this);
        this.setExperienceValue = this.setExperienceValue.bind(this);
        this.removeExperience = this.removeExperience.bind(this);
    }

    addEntry(inArray, newEntry) {
        this.setState(function(prevState) {
            const newIndex = prevState.lastIndex + 1;
            newEntry.id = newIndex;

            const newArray = prevState[inArray].concat(newEntry);
            
            // should i return only the new state or the whole prevState?
            return { [inArray]: newArray,
                    lastIndex: newIndex };
        });
    }

    removeEntry(inArray, id) {
        this.setState(function(prevState) {
            const newArray = prevState[inArray].filter((entry) => {
                return entry.id !== id;
            });

            return {
                [inArray]: newArray,
            };
        });
    }

    setValue(inArray, id, name, value) {
        this.setState(function(prevState) {
            const newArray = prevState[inArray].map((entry) => {
                if (entry.id === id) {
                    return {
                        ...entry,
                        [name]: value,
                    };
                }
                return entry;
            });

            return {
                [inArray]: newArray,
            };
        });
    }

    setGeneral(name, value) {
        this.setState({[name]: value});
    }

    addEducation() {
        const educationTemplate = { school: '',
                                    education: '',
                                    dateStart: '',
                                    dateEnd: '',
                                  };

        this.addEntry('education', educationTemplate);
    }

    removeEducation(id) {
        this.removeEntry('education', id);
    }

    setEducationValue(id, name, value) {
        this.setValue('education', id, name, value);
    }

    addExperience() {
        const experienceTemplate = { company: '',
                                    position: '',
                                    dateStart: '',
                                    dateEnd: '',
                                    description: '',
                                    };

        this.addEntry('experience', experienceTemplate)
    }

    removeExperience(id) {
        this.removeEntry('experience', id);
    }

    setExperienceValue(id, name, value) {
        this.setValue('experience', id, name, value);
    }

    render() {
        return (
            <div className="cv-generator">
                <CVGeneratorInput currentState={this.state}
                                  setGeneral={this.setGeneral}

                                  addEducation={this.addEducation}
                                  setEducationValue={this.setEducationValue}
                                  removeEducation={this.removeEducation}

                                  addExperience={this.addExperience}
                                  setExperienceValue={this.setExperienceValue}
                                  removeExperience={this.removeExperience}
                                  />
                <CVGeneratorOutput data={this.state}/>
            </div>
        );
    }
}