import React from 'react'
import {navigate} from '@reach/router'

export default class Payment extends React.Component {
    state={
        cardInp:'',
        name:'',
        price:''
    }

    handleInput=(e) => {
        this.setState({[e.target.name]:e.target.value })
    }

    componentDidMount() {
        const recipeArr=JSON.parse(localStorage.getItem('recipe_arr'))
        const {id}=this.props
        const {price}= recipeArr.find(recipe => recipe.id === Number(id) ? recipe.price : 0)
        this.setState({price})
    }

    handleButtonClick=(e) => {
        navigate('/payment/securetunnel')
    }
    

    render() {
        return (
            <div>
                <h3>Pay ${this.state.price} with your credit or debit card.</h3>
                <label>Card Number:</label>
                <input type="text" name="cardInp" maxLength='16'/>
                <label>Name:</label>
                <input type="text" name="name"/>
                <button onClick={this.handleButtonClick}>Pay Now</button>
            </div>
        )
    }
}


