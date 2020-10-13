import React from 'react';
import {Router} from '@reach/router'
import App from './Components/LandingPage/App';
import Payment from './Components/LandingPage/Payment';
import OTP from './Components/OTPComponent/OTP';
import Success from './Components/OTPComponent/Success';
import Failed from './Components/OTPComponent/Failed';


export default function Route() {
    return (
        <Router>
            <App path="/" exact />
            <Payment path="/payment/:id" exact/>
            <OTP path='/payment/securetunnel' exact/>
            <Success path='/success' exact/>
            <Failed path='/failed' exact/>
            
        </Router>
    )
}