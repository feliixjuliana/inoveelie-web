import { Segment } from 'semantic-ui-react';
import './App.css';
import Rotas from './Rotas';

function App() {

  return (

    <div className="App">
      
      <Rotas />

      <div className='rodape'>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2024 - Inove Elie
        </Segment>
      </div>

    </div>
  );
}

export default App;
