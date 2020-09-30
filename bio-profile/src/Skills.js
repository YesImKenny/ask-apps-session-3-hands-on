import * as React from 'react';
import Skill from './Skill';

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const skills = this.props.skills;
    return (
      <div>
        I am skilled in:
        {skills.map((skill, index) => {
          return (
            <Skill skill={skill} key={index}/>
          );
        })}
      </div>
    );
  }
}

export default Skills;