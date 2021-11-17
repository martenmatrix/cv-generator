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

                educationLastUsedIndex: 0,
                education: [
                    {
                        id: 0,
                        school: '',
                        education: '',
                        dateStart: '',
                        dateEnd: '',
                    }
                ],
                experience: [],
            }

        this.setGeneral = this.setGeneral.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.removeExperience = this.removeExperience.bind(this);
    }

    setGeneral(name, value) {
        this.setState({[name]: value});
    }

    addEducation() {
        this.setState(function(prevState) {
            const newIndex = prevState.educationLastUsedIndex + 1;

            const newArray = prevState.education.concat(
                {
                    id: newIndex,
                    school: '',
                    education: '',
                    dateStart: '',
                    dateEnd: '',
                }
            );

            // should i return only the new state or the whole prevState?
            return {
                educationLastUsedIndex: newIndex,
                education: newArray,
            };
        });
    }

    removeEducation(id) {
    }

    setEducation(id, name, value) {
    }

    addExperience(experience) {
    }

    removeExperience(id) {
    }

    render() {
        return (
            <div className="cv-generator">
                <CVGeneratorInput currentGeneral={this.state}
                                  setGeneral={this.setGeneral}
                                  addEducation={this.addEducation}
                                  removeEducation={this.removeEducation}
                                  addExperience={this.addExperience}
                                  removeExperience={this.removeExperience}
                                  educationArray={this.state.education}/>
                <CVGeneratorOutput data={this.state}/>
            </div>
        );
    }
}