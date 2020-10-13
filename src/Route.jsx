import React from 'react';
import {Router} from '@reach/router'
import App from './Components/LandingPage/App';
import Payment from './Components/LandingPage/Payment';


export default function Route() {
    return (
        <Router>
            <App path="/" />
            <Payment path="/payment" />
            
        </Router>
    )
}