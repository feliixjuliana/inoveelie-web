import { Segment } from 'semantic-ui-react';
import './App.css';
import Home from './views/home/Home';

function App() {

  return (

    <div className="App">
      
      <Home />

      <div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2024 - Inove Elie
        </Segment>
      </div>

    </div>
  );
}

export default App;
