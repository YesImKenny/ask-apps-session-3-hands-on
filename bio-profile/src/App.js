import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css'; 
// Import BioProfiles here
import BioProfiles from './BioProfiles';

class App extends React.Component {
	constructor(props) {
  	super(props);
  }
  
  // Plugin the BioProfiles component within the div

  render() {
    return (
      <div>
        Bio Profiles!!!! 
        <BioProfiles />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;