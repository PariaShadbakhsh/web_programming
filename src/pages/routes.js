import React from 'react'

import Search from './Search';

import { Router ,Route } from 'react-router';


export default (
    <Router  exact path='/' component={Search}>
        <Route path='restaurant' component={Restaurant} />
    </Router>
);