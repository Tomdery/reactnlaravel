import React, { Component } from 'react'

export default class SinglePost extends Component {
    constructor(props){
        super(props)
        this.state = {
            post:[],
            counter:0
        }

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(){
        this.setState(prevState => ({counter:prevState.counter+1}))
    }


    render() {
        return (
            <div>
                <h2>{this.state.post.title}</h2>
                <p>{this.state.post.content}</p>
                <p>{this.state.post.by}</p>
                <p>{this.state.post.created_at}</p>
                <p onClick={this.handleClick}> Patinka <span>{this.state.counter}</span></p>
            </div>
        )
    }

    componentDidMount() {
        const {id} = this.props.match.params
        fetch("http://web.local/api/post/" + id)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                post: data
            })
        })
    }



}
