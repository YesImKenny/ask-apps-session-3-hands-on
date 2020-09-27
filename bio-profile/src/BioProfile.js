import * as React from 'react';
import Name from './Name';
import Age from './Age';
import DateOfBirth from './DateOfBirth';
import Country from './Country';
import Skills from './Skills';
// import

class BioProfile extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
    const { name, age, dob, country, skills } = this.props;
    return (
      
      <div>
        {/* {console.log(this.props)} */}
        <Name name={name} />
        <Age age={age} />
        <DateOfBirth dob={dob} />
        <Country country={country} />
        <Skills skills={skills} />
      </div>
    );
  }
}

export default BioProfile;