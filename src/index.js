import React from 'react';
import { App } from './components/app';
import { store$ } from './store'

store$
  .subscribe((store) => {
    React.render(<App {...store}/>, document.getElementById('root'));
  })
