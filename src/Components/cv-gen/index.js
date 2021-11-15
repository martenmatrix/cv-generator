import React, { Component } from 'react';
import CVGeneratorInput from './input';
import CVGeneratorOutput from './output';

export default class CVGenerator extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                general: {},
                education: [],
                experience: [],
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, value, section) {
        this.setState(
            { data: {
                [section]: {
                        [name]: value 
                    },
                },
            }, 
        );
    }

    render() {
        return (
            <div className="cv-generator">
                <CVGeneratorInput onNewInput={this.handleChange}/>
                <CVGeneratorOutput />
            </div>
        );
    }
}