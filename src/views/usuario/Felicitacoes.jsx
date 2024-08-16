import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Input, Message, Segment } from 'semantic-ui-react';
import { notifyError } from '../util/Util';
import { registerSuccessfulLoginForJwt } from '../util/AuthenticationService';

export default function Felicitacoes() {


    return (

        <div className="corpinhodocadastro">

          <h1 className='NotificandoSucesso'>Para nossa alegria, suas informações foram aceitas, aguarde nosso código de ativação em seu e-mail!</h1>
            

        </div>
    )
}

