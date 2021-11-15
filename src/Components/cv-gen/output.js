import React, { Component } from 'react';

class GeneralOutput extends Component {
    render() {
      return (
        <div className="general">

        </div>
      );
    }
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
      return (
        <div className="cv-generator-output">
            <GeneralOutput />
            <EducationOutput />
            <ExperienceOutput />
        </div>
      );
    }
}

export default CVGeneratorOutput;