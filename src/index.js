import React from 'react'
import ReactDom from 'react-dom'

import App from './components/app'
import './index.css'

ReactDom.render(
  [<h1>Connect 4</h1>,
    <App
      player_1='benjamin'
      player_2='claire'
    />],
  document.getElementById('root')
);
