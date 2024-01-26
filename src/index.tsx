/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router";

import './index.css'
import App from './App'
import User from './User';

const root = document.getElementById('root')

render(() => (
  <Router>
    <Route path="/" component={App} />
    <Route path="/user" component={User} />
  </Router>
),
  root!
)
