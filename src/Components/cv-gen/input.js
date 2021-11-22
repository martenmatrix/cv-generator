import React from 'react';

function GeneralInput(props) {
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        props.setGeneral(name, value);
    }

    const currentState = props.currentState;

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
                <input type="text" onChange={handleChange} value={firstName} name="firstName" placeholder="First Name" />
                <input type="text" onChange={handleChange} value={lastName} name="lastName" placeholder="Last Name" />
                <input type="text" onChange={handleChange} value={email} name="email" placeholder="Email" />
                <input type="text" onChange={handleChange} value={phone} name="phone" placeholder="Phone" />
                <div className="address">
                    <input type="text" onChange={handleChange} value={street} name="street" placeholder="Street" />
                    <input type="text" onChange={handleChange} value={number} name="number" placeholder="Number" />
                    <input type="text" onChange={handleChange} value={city} name="city" placeholder="City" />
                    <input type="text" onChange={handleChange} value={state} name="state" placeholder="State" />
                    <input type="text" onChange={handleChange} value={zip} name="zip" placeholder="Zip" />
                    <input type="text" onChange={handleChange} value={country} name="country" placeholder="Country" />
                </div>
            </div>
        </div>
      );
}
  
function EducationInput(props) {
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        props.setEducationValue(props.data.id, name, value);
    }

    const { 
        id,
        school,
        education,
        dateStart,
        dateEnd } = props.data;

    const removeEducation = props.removeEducation;

    return (
      <div className="education">
          <div className="education-input">
              <input type="text" value={school} onChange={handleChange} name="school" placeholder="School" />
              <input type="text" value={education} onChange={handleChange} name="education" placeholder="Education" />
              <div className="date">
                  <input type="text" value={dateStart} onChange={handleChange} name="dateStart" placeholder="Start" />
                  <input type="text" value={dateEnd} onChange={handleChange} name="dateEnd" placeholder="End" />
              </div>
          </div>
          <button onClick={() => removeEducation(id)}>Delete</button>
      </div>
    );
}

function ExperienceInput(props) {
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        props.setExperienceValue(props.data.id, name, value);
    }

    const { id,
          company,
          position,
          dateStart,
          dateEnd,
          description
          } = props.data;
    
    const removeExperience = props.removeExperience;

    return (
      <div className="experience">
          <div className="experience-input">
              <input type="text" onChange={handleChange} value={company} name="company" placeholder="Company" />
              <input type="text" onChange={handleChange} value={position} name="position" placeholder="Position" />
              <div className="date">
                  <input type="text" onChange={handleChange} value={dateStart} name="dateStart" placeholder="Start" />
                  <input type="text" onChange={handleChange} value={dateEnd} name="dateEnd" placeholder="End" />
              </div>
              <textarea name="description" onChange={handleChange} value={description} placeholder="Description" />
          </div>
          <button onClick={() => removeExperience(id)}>Delete</button>
      </div>
    );
}

function CVGeneratorInput(props) {
    const { currentState,
        setGeneral,
        setEducationValue,
        addEducation,
        removeEducation,

        addExperience,
        removeExperience,
        setExperienceValue,
       } = props;

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

export default CVGeneratorInput;