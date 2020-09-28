import * as React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const skills = this.props.skills;
    return (
      <div>
        I am skilled in: {skills}
      </div>
    );
  }
}

export default Skills;