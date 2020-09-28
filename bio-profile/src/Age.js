import * as React from 'react';

const Age = (props) => {
  const age = props.age;
  return (
    <div>
      <section>
        Age:
        <span> {age}
        </span>
      </section>
      
    </div>
  );
}

export default Age;