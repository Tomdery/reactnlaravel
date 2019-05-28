import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Post extends Component {
    constructor(){
        super()
        this.state = {
            counter:0
        }

        this.handleClick = this.handleClick.bind(this)

    }


    handleClick(){
        this.setState(prevState => ({counter:prevState.counter+1}))
    }

    render() {
        return (
            <div className='random-class'>
                     
                    <Link to={`/post/${this.props.id}`}><h2>{this.props.title}</h2></Link>
                
                <p>{this.props.content}</p>
                <p>{this.props.by}</p>
                <p>{this.props.created_at}</p>
                <p onClick={this.handleClick}> Patinka <span>{this.state.counter}</span></p>
            </div>
        )
    }
}