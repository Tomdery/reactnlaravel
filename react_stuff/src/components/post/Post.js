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
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            } 
        })
    }

    handleLink(e){
        const id = e.target.id;
        console.log(id);
    }



    render() {
        return (
            <div className='random-class'>
                <Router>
                    
                Linkas (){
             return (<h1>Labas</h1>)
    }
                    
                    
                    <Link to={`/post/${this.props.id}`}><h2 id={this.props.id} onClick={this.handleLink}>{this.props.title}</h2></Link>
                

                
                <Route path={`post/:id`} component={Linkas} />

                </Router>
                <p>{this.props.content}</p>
                <p>{this.props.by}</p>
                <p>{this.props.created_at}</p>
                <p onClick={this.handleClick}> Patinka <span>{this.state.counter}</span></p>
            </div>
        )
    }
}