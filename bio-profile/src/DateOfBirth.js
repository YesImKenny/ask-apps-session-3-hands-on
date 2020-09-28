import * as React from 'react';

class DateOfBirth extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const dob = this.props.dob;
    return (
      <div>
      <section>
        Date Of Birth: 
        <span> {dob}
        </span>
      </section>
      
    </div>
    );
  }

}

export default DateOfBirth;