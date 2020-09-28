import * as React from 'react';

const Name = (props) => {
  const name  = props.name;
  return (
    <div>
      <section>Name:
      <span> {name}</span>
      </section>
      
    </div>
  );
}

export default Name;