import React from 'react';
import { App } from './components/app.js';
import { store$ } from './store.js'

store$
  .subscribe((store) => {
    React.render(<App {...store}/>, document.getElementById('root'));
  })
