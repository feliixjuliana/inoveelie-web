import { Segment } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Rotas from './Rotas';

function App() {

  return (

    <div className="App">
        
      <ToastContainer />
      <Rotas />

    </div>
  );
}

export default App;
