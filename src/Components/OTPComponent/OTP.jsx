import { navigate } from '@reach/router';
import React from 'react';

export default class OTP extends React.Component {
    state={
        value:''
    }

    handleSubmitBtn=(e) => {
        if(this.state.value === '123456') {
            navigate('/success')
        }
        else {
            navigate('/failed')
        }

    }

    handleInp= (e) =>{
        this.setState({value:e.target.value})
    }

    render() {
        return(
            <div>
            <label>Enter 6-digit OTP:</label>
                <input type="text" maxLength='6' onChange={this.handleInp}/>
                <button onClick={this.handleSubmitBtn}>Submit</button>
            </div>
        )
    }

}