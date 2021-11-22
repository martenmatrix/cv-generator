import React, { useState } from 'react';
import CVGeneratorInput from './input';
import CVGeneratorOutput from './output';

function CVGenerator(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');

    const [lastIndex, setLastIndex] = useState(0);
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    const stateObject = {
        firstName,
        lastName,
        email,
        phone,
        street,
        number,
        city,
        state,
        zip,
        country,
        lastIndex,
        education,
        experience
    }

    function addEntry(inArray, newEntry) {
        setLastIndex( (prevIndex) => {
            const newIndex = prevIndex + 1;
            newEntry.id = newIndex;
            return newIndex;
        });

        if (inArray === 'education') {
            setEducation(prevEducation => [...prevEducation, newEntry]);
        } else if (inArray === 'experience') {
            setExperience(prevExperience => [...prevExperience, newEntry]);
        }
    }

    function removeEntry(inArray, id) {
        const ignoreEntry = (array, removeID) => array.filter(entry => entry.id !== removeID); 

        if (inArray === 'education') {
            setEducation(prevEducation => {
                return ignoreEntry(prevEducation, id);
            });
        } else if (inArray === 'experience') {
            setExperience(prevExperience => {
                return ignoreEntry(prevExperience, id);
            });
        }
    }

    function setValue(inArray, id, name, value) {
        const changeValue = (inArray, id, name, value) => {
            return inArray.map(entry => {
                if (entry.id === id) {
                    entry[name] = value;
                }
                return entry;
            });
        }

        if (inArray === 'education') {
            setEducation(prevEducation => changeValue(prevEducation, id, name, value));
        } else if (inArray === 'experience') {
            setExperience(prevExperience => changeValue(prevExperience, id, name, value));
        }
    };

    function setGeneral(name, value) {
        if (name === 'firstName') {
            setFirstName(value);
        } else if (name === 'lastName') {
            setLastName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'phone') {
            setPhone(value);
        } else if (name === 'street') {
            setStreet(value);
        } else if (name === 'number') {
            setNumber(value);
        } else if (name === 'city') {
            setCity(value);
        } else if (name === 'state') {
            setState(value);
        } else if (name === 'zip') {
            setZip(value);
        } else if (name === 'country') {
            setCountry(value);
        }
    }

    function addEducation() {
        const educationTemplate = { school: '',
                                    education: '',
                                    dateStart: '',
                                    dateEnd: '',
                                  };

        addEntry('education', educationTemplate);
    }

    function removeEducation(id) {
        removeEntry('education', id);
    }

    function setEducationValue(id, name, value) {
        setValue('education', id, name, value);
    }

    function addExperience() {
        const experienceTemplate = { company: '',
                                    position: '',
                                    dateStart: '',
                                    dateEnd: '',
                                    description: '',
                                    };

        addEntry('experience', experienceTemplate)
    }

    function removeExperience(id) {
        removeEntry('experience', id);
    }

    function setExperienceValue(id, name, value) {
        setValue('experience', id, name, value);
    }

    return (
        <div className="cv-generator">
            <CVGeneratorInput currentState={stateObject}
                              setGeneral={setGeneral}

                              addEducation={addEducation}
                              setEducationValue={setEducationValue}
                              removeEducation={removeEducation}

                              addExperience={addExperience}
                              setExperienceValue={setExperienceValue}
                              removeExperience={removeExperience}
                              />
            <CVGeneratorOutput data={stateObject}/>
        </div>
    );
}

export default CVGenerator;