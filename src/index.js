import React from 'react';
import { App } from './components/app';
import { state$ } from './observables/state.js'

state$.
    subscribe((state) => {
        React.render(<App {...state}/>, document.getElementById('root'));
    })
