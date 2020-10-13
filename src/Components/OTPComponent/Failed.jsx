import { Link } from '@reach/router';
import React from 'react'


function Failed() {
    return (
        <div>
            <h1>Payment failed</h1>
            <Link to='/'>Home</Link>
        </div>
    )
    
}

export default Failed;
