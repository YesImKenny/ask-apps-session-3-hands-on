import * as React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const skills = this.props.skills;
    return (
      <div>
        {skills}
      </div>
    );
  }
}

export default Skills;