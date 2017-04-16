import { app } from 'hyperapp';
import actions from './actions';
import state from './state';
import view from './views/counter';

app({ state, actions, view });
