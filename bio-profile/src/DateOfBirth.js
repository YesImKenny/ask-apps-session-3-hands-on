import * as React from 'react';

class DateOfBirth extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const formatDate = (date) => {
      let dateArr = date.split('/');
      let temp = dateArr[0];
      dateArr[0] = dateArr[1];
      dateArr[1] = temp;
      return dateArr.join('/');
    }
    const dob = formatDate(this.props.dob);
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