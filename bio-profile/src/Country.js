import * as React from 'react';

const Country = (props) => {
  const country = props.country;
  if (country) {
    return (
      <div>
        I am from {country}
      </div>
    );
  } else {
    return (
      <div>
        I am from United States of America
      </div>
    );
  }
  
}

export default Country;