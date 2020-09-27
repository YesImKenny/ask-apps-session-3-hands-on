import * as React from 'react';

class DateOfBirth extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const dob = this.props.dob;
    return (
      <div>
        {dob}
      </div>
    );
  }

}

export default DateOfBirth;