import * as React from 'react';
import { Button  } from 'react-bootstrap';
import './App.css';

import { Link } from 'react-router-dom';
import { userService } from '../../Models/UserService';

interface WellcomeState {
  name: string;
}

interface WellcomeProps {

}

class Wellcome extends React.Component<WellcomeProps, WellcomeState> {

  constructor(props: WellcomeProps) {
    super(props);
  }

  componentDidMount() {
    this.setState({name: ''});
  }
  
  updateName(data: string) {
    this.setState( {name: data} );
  }

  componentWillUnmount() {
    userService.setName(this.state.name);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bounjour, Bienvenue à Français Level 1 </h2>
        </div>
        <p className="App-intro">
          Je m'appelle Everton. Étudions un peu le français? <br />
          Comment vous vous appelez? 
          <input type="text" name="prenoum" onChange={e => this.updateName(e.target.value)}/> 
          <br /><br />
          
          <Button bsStyle="primary" bsSize="large">
            <Link to={{pathname: '/content', state: {name: 'Everton'}}}>Commencer </Link>
          </Button>
        </p>
      </div>
    );
  }
}

export default Wellcome;
