import { Segment } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import { Grid, Button, Container, Divider, Form, FormGroup, FormRadio, FormSelect, Icon, Input, FormTextArea } from 'semantic-ui-react';

import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Rotas from './Rotas';
import { Link } from 'react-router-dom';

function App() {

  return (

    <div className="App">

      <ToastContainer />
      <Rotas />

      <div className='rodapeFixo'>

        <div className='redesSociais'>

        <a href="https://www.instagram.com/inoveelie/" target="_blank" class="instagram-link">
          <div className='instagram'></div>
          </a>

          <a href="https://github.com/feliixjuliana/inoveelie-web" target="_blank" class="web-link">
          <div className='githubWeb'></div>
          </a>

          <a href="https://github.com/Scajk/inoveelie-api-cejms.git" target="_blank" class="api-link">
          <div className='githubApi'></div>
          </a>

        </div>
        <div className='paragrafo'>
          <p> Inove Eliê - 2024 - CEJMS </p>
        </div>

        <div>

        <a href='https://jgdsf4.wixsite.com/projeto-pp2---cmjes' target="_blank" class="site-link">
        <button className='devsSite'>
            Devs
        </button>
        </a>
</div>
      </div>

    </div>


  );
}

export default App;
