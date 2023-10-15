import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelloworldApp } from './helloworldApp';
//import {NicApp} from './NicApp';


import './styles.css';

import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root')).render(
<React.StrictMode>

   
   <CounterApp value={10}/>

    </React.StrictMode>
);