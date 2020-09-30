import * as React from 'react';
import Skill from './Skill';
import './Skills.css';

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const skills = this.props.skills;
    return (
      <div>
        I am skilled in:
        <ul>
        {skills.map((skill, index) => {
          return (
            <li key={index}>
              <Skill skill={skill} key={index}/>
            </li>
          );
        })}
        </ul>
        <hr></hr>
      </div>
    );
  }
}

export default Skills;