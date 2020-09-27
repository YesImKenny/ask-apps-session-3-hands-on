import * as React from 'react';

const Country = (props) => {
  const country = props.country;
  return (
    <div>
      {country}
    </div>
  );
}

export default Country;